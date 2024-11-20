// Importamos express
const express = require("express");

// Creamos una instancia de Express
const app = express();

// Definimos una ruta
app.get("/", (req, res) => {
  res.send("¡Hola Mundo!");
});

// Establecemos el puerto de escucha
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
