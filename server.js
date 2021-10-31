// Configuracion inicial
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

// Midlewares de express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const productsRouter = require("./src/routers/productos");
const carritoRouter = require("./src/routers/carrito");
const errorNotFound = require("./src/middlewares/handleError404");
// Carpeta public para ver la api en un frontend
app.use(express.static("public"));
// app.use('/static', express.static('public'));

// Configuracion de routers
app.use("/api/productos", productsRouter);
app.use("/api/carrito", carritoRouter);

// Enciendo el servidor
app.listen(PORT, () => {
  console.log(`Server is up and running in port: ${PORT}`);
});
// Manejo de errores
app.on("error", (err) => console.log("Error: ", err));
//Error 404
app.use(errorNotFound);
