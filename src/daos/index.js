const ProductDaoMongo = require("./products/ProductDaoMongo");
const ProductDaoFirebase = require("./products/ProductDaoFirebase");
const ProductDaoFile = require("./products/ProductDaoFile");

const daos = {};

if (process.env.storage === "mongodb") {
  daos["productDao"] = new ProductDaoMongo();
}

if (process.env.storage === "firebase") {
  daos["productDao"] = new ProductDaoFirebase();
}

if (process.env.storage === "file") {
  daos["productDao"] = new ProductDaoFile();
}

module.exports = daos;
