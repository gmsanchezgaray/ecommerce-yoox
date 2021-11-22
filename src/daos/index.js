const ProductDaoMongo = require("./products/ProductDaoMongo");
const ProductDaoFirebase = require("./products/ProductDaoFirebase");
const ProductDaoFile = require("./products/ProductDaoFile");
const CartDaoFile = require("./carts/CartDaoFile");
const CartDaoMongo = require("./carts/CartDaoMongo");
const CartDaoFirebase = require("./carts/CartDaoFirebase");

const daos = {};

if (process.env.storage === "mongodb") {
  daos["productDao"] = new ProductDaoMongo();
  daos["cartDao"] = new CartDaoMongo();
}

if (process.env.storage === "firebase") {
  daos["productDao"] = new ProductDaoFirebase();
  daos["cartDao"] = new CartDaoFirebase();
}

if (process.env.storage === "file") {
  daos["productDao"] = new ProductDaoFile();
  daos["cartDao"] = new CartDaoFile();
}

module.exports = daos;
