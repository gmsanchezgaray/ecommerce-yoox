const express = require("express");

const { productDao } = require("../daos");
const isAdmin = require("../middlewares/isAdmin");

const productsRouter = express.Router();

//GET '/api/productos' -> devuelve todos los productos.
productsRouter.get("/", async (req, res) => {
  const data = await productDao.getAll();
  res.send({ data });
});

//GET '/api/productos/:id' -> devuelve un producto según su id.
productsRouter.get("/:id", async (req, res) => {
  const index = req.params.id;
  const data = await productDao.getById(index);
  if (!data) {
    res.send({ error: "producto no encontrado" });
  } else {
    res.send({ data });
  }
});

// POST '/api/productos' -> recibe y agrega un producto, y lo devuelve con su id asignado.
productsRouter.post("/", isAdmin, async (req, res) => {
  const newProduct = req.body;

  const codigo = Math.random().toString(26).slice(2);
  newProduct.codigo = codigo;
  const datetime = Date.now();
  newProduct.timestamp = datetime;

  // const dataWithId = await createProduct(newProduct);
  const dataWithId = await productDao.save(newProduct);
  res.send({ ...newProduct, id: dataWithId });
});

// PUT '/api/productos/:id' -> recibe y actualiza un producto según su id.
productsRouter.put("/:id", isAdmin, async (req, res) => {
  const index = req.params.id;
  const newInfo = req.body;

  const dataToUpdate = await productDao.update(index, newInfo);
  if (!dataToUpdate) {
    res.send({ error: "producto no encontrado" });
  } else {
    res.send(dataToUpdate);
  }
});

// DELETE '/api/productos/:id' -> elimina un producto según su id.
productsRouter.delete("/:id", isAdmin, async (req, res) => {
  const index = req.params.id;
  const dataRemoved = await productDao.deleteById(index);

  if (!dataRemoved) {
    res.send({ error: "producto no encontrado" });
  } else {
    res.send({
      status: "el producto ha sido eliminado",
      dataProductRemoved: dataRemoved,
    });
  }
});

module.exports = productsRouter;
