const express = require("express");
const {
  createCart,
  deleteCart,
  getProductsByIdCart,
  addProductToCart,
  deleteProductToCart,
} = require("../models/carrito");

const carritoRouter = express.Router();

// Rutas de carrito

carritoRouter.get("/", (req, res) => {
  res.send({ message: "sucess", data: ["a", "b", "c", "d", "f"] });
});

// GET '/api/productos/:id' -> Me permite listar todos los productos guardados en el carrito.
carritoRouter.get("/:id/productos", async (req, res) => {
  const index = req.params.id;
  const data = await getProductsByIdCart(index);
  if (!data) {
    res.send({ error: "carrito no encontrado" });
  } else {
    res.send({ data });
  }
});

// POST '/api/carrito' -> Crea un carrito y devuelve su id.
carritoRouter.post("/", async (req, res) => {
  const newChart = req.body;

  const dataWithId = await createCart(newChart);
  res.send({ ...newChart, id: dataWithId });
});

// POST '/:id/productos' -> Para incorporar productos al carrito por su id de producto.
carritoRouter.post("/:id/productos", async (req, res) => {
  const cartId = req.params.id;
  const cartWithNewProduct = req.body;

  const cart = await addProductToCart(cartId, cartWithNewProduct);
  res.send({ data: cart });
});

// DELETE: '/:id/productos/:id_prod' -> Eliminar un producto del carrito por su id de carrito y de producto
carritoRouter.delete("/:id/productos/:id_prod", async (req, res) => {
  const cartId = req.params.id;
  const productId = req.params.id_prod;

  const cart = await deleteProductToCart(cartId, productId);
  res.send({ data: cart });
});

// DELETE '/api/carrito/:id' -> Vacía un carrito y lo elimina.
carritoRouter.delete("/:id", async (req, res) => {
  const index = req.params.id;
  const dataRemoved = await deleteCart(index);

  if (!dataRemoved) {
    res.send({ error: "carrito no encontrado" });
  } else {
    res.send({
      status: "el carrito ha sido eliminado",
      dataCartRemoved: dataRemoved,
    });
  }
});

module.exports = carritoRouter;
