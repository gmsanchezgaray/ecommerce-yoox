const FileContainer = require("../../containers/FileContainer");

class ProductDaoArchivo extends FileContainer {
  constructor() {
    super("./data/productos.json");
  }
}

module.exports = ProductDaoArchivo;
