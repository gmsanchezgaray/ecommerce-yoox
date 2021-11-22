const FileContainer = require("../../containers/FileContainer");

class ProductDaoFile extends FileContainer {
  constructor() {
    super("./data/productos.json");
  }
}

module.exports = ProductDaoFile;
