const Contenedor = require("../../Contenedor");

const productoContenedor = new Contenedor("./data/productos.json");

const getAllProducts = async () => {
  const list = await productoContenedor.getAll();
  return list;
};

const getOneProduct = async (indexNumber) => {
  const product = await productoContenedor.getById(indexNumber);
  return product;
};

const createProduct = async (product) => {
  //TODO REVISAR CODIGO PARA GENERAR un codigo y agregarlo
  const codigo = Math.random().toString(26).slice(2);
  const idProduct = await productoContenedor.save(product);
  return idProduct;
};

const editProduct = async (indexNumber, infoToChange) => {
  const productToUpdate = await productoContenedor.update(
    indexNumber,
    infoToChange
  );

  return productToUpdate;
};

const deleteProduct = async (indexNumber) => {
  const productToRemove = await productoContenedor.deleteById(indexNumber);
  return productToRemove;
};

module.exports = {
  getAllProducts,
  getOneProduct,
  createProduct,
  editProduct,
  deleteProduct,
};
