const { Schema } = require("mongoose");
const MongoContainer = require("../../containers/MongoContainer");

class CartDaoMongo extends MongoContainer {
  constructor() {
    super(
      "carts",
      new Schema({
        productos: { type: Array, required: true },
        timestamp: { type: Number, required: true },
      })
    );
  }
}

module.exports = CartDaoMongo;
