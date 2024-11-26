const express = require("express");
const dotenv = require("dotenv");
const discountRoutes = require("./src/routes/discountRoutes");
const errorHandler = require("./src/utils/errorHandler");

dotenv.config();
const app = express();
const port = 3000;

// Middleware para manejar rutas
app.use("/api", discountRoutes);

// Middleware para manejo de errores
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
