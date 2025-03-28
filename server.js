const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 5000;

const server = http.createServer((req, res) => {
  // Agregar encabezados para permitir CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Si la solicitud es de tipo OPTIONS, responder rápidamente
  if (req.method === "OPTIONS") {
    res.writeHead(204);
    return res.end();
  }

  let filePath = "";

  if (req.url === "/") {
    filePath = path.join(__dirname, "index.html");
  } else if (req.url === "/productos") {
    filePath = path.join(__dirname, "productos.html");
  } else {
    filePath = path.join(__dirname, req.url);
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" });
      res.end(`
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
    } else {
      const ext = path.extname(filePath);
      let contentType = "text/html";

      switch (ext) {
        case ".css":
          contentType = "text/css";
          break;
        case ".js":
          contentType = "application/javascript";
          break;
        case ".png":
          contentType = "image/png";
          break;
        case ".jpg":
        case ".jpeg":
          contentType = "image/jpeg";
          break;
        case ".ico":
          contentType = "image/x-icon";
          break;
        case ".svg":
          contentType = "image/svg+xml";
          break;
      }

      res.writeHead(200, { "Content-Type": contentType });
      res.end(data);
    }
  });
});

server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
