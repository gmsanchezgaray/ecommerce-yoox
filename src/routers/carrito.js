const express = require("express");

const { cartDao } = require("../daos");
const { productDao } = require("../daos");

const carritoRouter = express.Router();

// Rutas de carrito

// GET '/api/productos/:id' -> Me permite listar todos los productos guardados en el carrito.
carritoRouter.get("/:id/productos", async (req, res) => {
  const index = req.params.id;
  const data = await cartDao.getById(index);
  const { productos } = data;
  if (!data) {
    res.send({ error: "carrito no encontrado" });
  } else {
    res.send({ data });
    return productos;
  }
});

// POST '/api/carrito' -> Crea un carrito y devuelve su id.
carritoRouter.post("/", async (req, res) => {
  const dateTime = Date.now();
  const dataWithId = await cartDao.save({ productos: [], timestamp: dateTime });

  res.send({ dataWithId });
});

// POST '/:id/productos' -> Para incorporar productos al carrito por su id de producto.
carritoRouter.post("/:id/productos", async (req, res) => {
  const idProductToAdd = req.params.id;

  const addProductToCart = async (indexNumber) => {
    const productos = await productDao.getAll();
    const idsProductos = productos.map((product) => {
      return product.id;
    });

    idsProductos.map(async () => {
      let producto = await productDao.getById(indexNumber);
      if (producto) {
        await cartDao.addObject(producto, "productos");
      }
    });
  };

  const cart = await addProductToCart(idProductToAdd);

  res.send({ data: cart });
});

// DELETE: '/:id/productos/:id_prod' -> Eliminar un producto del carrito por su id de carrito y de producto
carritoRouter.delete("/:id/productos/:id_prod", async (req, res) => {
  const cartId = req.params.id;
  const productId = req.params.id_prod;

  const deleteProductToCart = async (indexNumber, indexProduct) => {
    const cart = await cartDao.getById(indexNumber);
    const { productos } = cart;

    const newListOfProducts = productos.filter(
      (producToDelete) => producToDelete.id != indexProduct
    );

    const newCart = {
      ...cart,
      productos: newListOfProducts,
    };

    const cartUpdated = await cartDao.update(indexNumber, newCart);
    return cartUpdated;
  };

  const carrito = await deleteProductToCart(cartId, productId);

  res.send({ data: carrito });
});

// DELETE '/api/carrito/:id' -> Vacía un carrito y lo elimina.
carritoRouter.delete("/:id", async (req, res) => {
  const index = req.params.id;

  const deleteCart = async (indexNumber) => {
    const chartToRemove = await cartDao.deleteById(indexNumber);
    return chartToRemove;
  };

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
