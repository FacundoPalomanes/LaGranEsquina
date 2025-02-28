const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;

const server = http.createServer((req, res) => {
  let filePath = "";

  if (req.url === "/") {
    filePath = path.join(__dirname, "index.html");
  } else if (req.url === "/productos") {
    filePath = path.join(__dirname, "productos.html");
  } else {
    // Manejo de archivos estáticos (imágenes, CSS, JS, etc.)
    filePath = path.join(__dirname, req.url);
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Página no encontrada");
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
