const { Schema } = require("mongoose");
const MongoContainer = require("../../containers/MongoContainer");

class ProductDaoMongo extends MongoContainer {
  constructor() {
    super(
      "products",
      new Schema({
        nombre: { type: String, required: true },
        descripcion: { type: String, required: true },
        foto: { type: String, required: true },
        precio: { type: Number, required: true },
        stock: { type: Number, required: true },
        codigo: { type: String, required: true },
        timestamp: { type: Number, required: true },
      })
    );
  }
}

module.exports = ProductDaoMongo;
