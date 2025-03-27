const express = require("express");
const path = require("path");
const fs = require("fs");
const XLSX = require("xlsx");
const multer = require("multer"); // Importar multer

const app = express();
const PORT = 3000;

// Configurar multer para almacenar los archivos en una carpeta 'uploads'
const upload = multer({
  dest: path.join(__dirname, "uploads"), // Carpeta de destino
});

// Ruta para css, js, img, etc.
app.use(express.static(path.join(__dirname, "public")));

// Home page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Products page
app.get("/productos", (req, res) => {
  res.sendFile(path.join(__dirname, "productos.html"));
});

// Ruta para acceder al archivo JSON generado
app.get("/data", (req, res) => {
  const jsonFilePath = path.join(__dirname, "uploads", "data.json");

  // Verifica si el archivo JSON ya existe y lo envía
  if (fs.existsSync(jsonFilePath)) {
    res.sendFile(jsonFilePath);
  } else {
    res.status(404).send("Archivo JSON no encontrado.");
  }
});

app.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No se ha subido ningún archivo.");
  }

  // Corregir la forma en que se maneja la ruta
  const tempFilePath = req.file.path; // Ruta temporal del archivo subido
  const newFilePath = path.join(
    __dirname,
    "uploads",
    req.file.filename + ".xlsx"
  ); // Renombramos con extensión .xlsx

  // Renombramos el archivo
  fs.renameSync(tempFilePath, newFilePath); // Renombramos el archivo para tener la extensión correcta

  // Leer el archivo Excel
  const workbook = XLSX.readFile(newFilePath); // Usamos la ruta correcta
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];

  // Convertir el contenido de la hoja Excel a JSON
  const data = XLSX.utils.sheet_to_json(sheet);

  // Agrupar los productos por Name y evitar duplicación
  const groupedData = {};

  data.forEach((item) => {
    // Extraer el valor de Name y verificar si existe
    const groupName = item.Name; // Valor de la columna 'Name'
    if (!groupName) return; // Si no tiene 'Name', lo omitimos

    if (!groupedData[groupName]) {
      groupedData[groupName] = [];
    }

    // Extraer el id del producto
    const productId = item['Value.id'];
    if (!productId) return; // Si no tiene id, lo omitimos

    // Si el grupo no tiene este producto, lo agregamos
    const product = {
      id: item['Value.id'],
      nombre: item['Value.nombre'],
      nombreCarrito: item['Value.nombreCarrito'] || item['Value.nombre'],
      descripcion: item['Value.descripcion'],
      imagen: item['Value.imagen'],
    };

    // Si ya existe el producto, lo buscamos y le agregamos los valores
    let existingProduct = groupedData[groupName].find(p => p.id === productId);
    if (!existingProduct) {
      groupedData[groupName].push(product);
      existingProduct = product;
    }

    // Si hay un tipo, lo agregamos sin duplicar
    if (item['Value.tipo']) {
      if (!existingProduct.tipo) {
        existingProduct.tipo = [];
      }
      if (!existingProduct.tipo.includes(item['Value.tipo'])) {
        existingProduct.tipo.push(item['Value.tipo']);
      }
    }

    // Si hay un color, lo agregamos sin duplicar
    if (item['Value.color']) {
      if (!existingProduct.color) {
        existingProduct.color = [];
      }
      if (!existingProduct.color.includes(item['Value.color'])) {
        existingProduct.color.push(item['Value.color']);
      }
    }

    // Si hay una medida, la agregamos sin duplicar
    if (item['Value.medida']) {
      if (!existingProduct.medidas) {
        existingProduct.medidas = [];
      }
      if (!existingProduct.medidas.includes(item['Value.medida'])) {
        existingProduct.medidas.push(item['Value.medida']);
      }
    }

    //si hay un href lo guarda
    if (item['Value.href']) {
      if (!existingProduct.href) {
        existingProduct.href = "";
      }
      if (!existingProduct.href.includes(item['Value.href'])) {
        existingProduct.href = item['Value.href'];  // Establecer href como una cadena
      }
    }
  });

  // Eliminar las propiedades vacías (tipo, color, medidas)
  Object.keys(groupedData).forEach((groupName) => {
    groupedData[groupName].forEach((product) => {
      if (!product.tipo || product.tipo.length === 0) {
        delete product.tipo;
      }
      if (!product.color || product.color.length === 0) {
        delete product.color;
      }
      if (!product.medidas || product.medidas.length === 0) {
        delete product.medidas;
      }
      if (!product.href || product.href.length === 0) {
        delete product.href;
      }
    });
  });

  // Guardar los datos como un archivo JSON
  const jsonFilePath = path.join(__dirname, "uploads", "data.json");

  // Escribir el archivo JSON
  fs.writeFileSync(jsonFilePath, JSON.stringify(groupedData, null, 2), "utf-8");

  fs.unlink(newFilePath, (err) => {
    if (err) {
      console.error("Error al eliminar el archivo:", err);
    } else {
      console.log("Archivo eliminado correctamente");
    }
  });

  res.json("Archivo subido y convertido a JSON correctamente.");
});


// 404 page
app.use((req, res) => {
  res.status(404).send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Dirección equivocada</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          text-align: center;
          padding: 50px;
          background-color: #f8f8f8;
        }
        h1 {
          color: #333;
        }
        button {
          margin-top: 20px;
          padding: 10px 20px;
          font-size: 16px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        button:hover {
          background-color: #0056b3;
        }
      </style>
    </head>
    <body>
      <h1>Dirección equivocada</h1>
      <p>La página que estás buscando no existe.</p>
      <button onclick="window.location.href='/'">Volver a la página principal</button>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
