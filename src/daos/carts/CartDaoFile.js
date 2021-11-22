const FileContainer = require("../../containers/FileContainer");

class CartDaoFile extends FileContainer {
  constructor() {
    super("./data/carritos.json");
  }
}

module.exports = CartDaoFile;
