const Contenedor = require("../../Contenedor");
const { getAllProducts, getOneProduct } = require("./productos");

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

const addProductToCart = async (indexNumber) => {
  const productos = await getAllProducts();
  const idsProductos = productos.map((product) => {
    return product.id;
  });

  idsProductos.map(async () => {
    let producto = await getOneProduct(parseInt(indexNumber));
    if (producto) {
      await carritoContenedor.addObject(producto, "productos");
    }
  });
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
