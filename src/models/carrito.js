const Contenedor = require("../../Contenedor");
const carritoRouter = require("../routers/carrito");

const carritoContenedor = new Contenedor("./data/carritos.json");

const createCart = async (carrito) => {
  const idCartSaved = await carritoContenedor.save(carrito);
  return idCartSaved;
};

const deleteCart = async (indexNumber) => {
  const chartToRemove = await carritoContenedor.deleteById(indexNumber);
  return chartToRemove;
};

const getProductsByIdCart = async (indexNumber) => {
  const cart = await carritoContenedor.getById(indexNumber);
  const { products } = cart;
  return products;
};

const addProductToCart = async (indexNumber, productsToAdd) => {
  const cartUpdated = await carritoContenedor.update(
    indexNumber,
    productsToAdd
  );

  return cartUpdated;
};

const deleteProductToCart = async (indexNumber, indexProduct) => {
  const cart = await carritoContenedor.getById(indexNumber);
  const { products } = cart;

  const newListOfProducts = products.filter(
    (producToDelete) => producToDelete.id != indexProduct
  );

  const newCart = {
    ...cart,
    products: newListOfProducts,
  };
  const cartUpdated = await carritoContenedor.update(indexNumber, newCart);
  return cartUpdated;
};

module.exports = {
  createCart,
  deleteCart,
  getProductsByIdCart,
  addProductToCart,
  deleteProductToCart,
};
