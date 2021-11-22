const mongoose = require("mongoose");
const options = require("../../config");

class MongoContainer {
  constructor(collection, schema) {
    this.collection = mongoose.model(collection, schema);
    this.init();
  }

  async init() {
    //Si no existe la conexion, la crea.
    if (!this.conexion) {
      this.conexion = await mongoose.connect(
        options.mongodb.host,
        options.mongodb.options
      );
    }
  }

  // Recibe un objeto, lo guarda en el archivo, devuelve el id asignado.
  async save(Object) {
    try {
      const data = await this.collection.create(Object);
      return data._id;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  // Recibe un id y devuelve el objeto con ese id, o null si no está.
  async getById(Number) {
    try {
      const data = await this.collection.find({ _id: Number });

      if (data.length !== 0) {
        return data[0];
      } else {
        console.log("No se encontro el producto.");
        return null;
      }
    } catch (error) {
      console.log(
        `Hubo un error tratando de buscar el producto con el id => ${Number}`,
        error
      );
    }
  }
  // Devuelve un array con los objetos presentes en el archivo.
  async getAll() {
    try {
      const data = await this.collection.find({});
      if (data.length !== 0) {
        console.log(data);
        return data;
      }
    } catch (error) {
      console.log("Hubo un error al traer los productos =>", error);
    }
  }

  // Recibe y actualiza un producto según su id
  async update(indexNumber, columnToEdit) {
    try {
      const data = await this.collection.updateOne(
        { _id: indexNumber },
        { $set: columnToEdit }
      );

      return data;
    } catch (error) {
      console.log("Hubo un error al editar el producto =>", error);
    }
  }

  // Elimina del archivo el objeto con el id buscado.
  async deleteById(Number) {
    try {
      const data = await this.collection.deleteOne({ _id: Number });

      console.log(data);
    } catch (error) {
      console.log("Hubo un error al eliminar el producto =>", error);
    }
  }
}

module.exports = MongoContainer;
