const admin = require("firebase-admin");
const options = require("../../config");

const serviceAccount = options.firestore;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://ecommerce-yoox.firebaseio.com",
});

const db = admin.firestore();

class FirebaseContainer {
  constructor(collection) {
    this.collection = db.collection(collection);
  }

  // Recibe un objeto, lo guarda en el archivo, devuelve el id asignado.
  async save(Object) {
    try {
      const data = await this.collection.doc().set(Object);
      return data.codigo;
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
      const snapshot = await this.collection.get();

      snapshot.forEach((doc) => {
        console.log({ id: doc.id, ...doc.data() });
      });
    } catch (error) {
      console.log("Hubo un error al traer los productos =>", error);
    }
  }

  // Recibe y actualiza un producto según su id
  async update(indexNumber, columnToEdit) {
    try {
      const data = await this.collection.doc(indexNumber).update(columnToEdit);

      return data;
    } catch (error) {
      console.log("Hubo un error al editar el producto =>", error);
    }
  }

  // Elimina del archivo el objeto con el id buscado.
  async deleteById(Number) {
    try {
      const data = await this.collection.doc(Number).delete();

      console.log(data);
    } catch (error) {
      console.log("Hubo un error al eliminar el producto =>", error);
    }
  }
}

module.exports = FirebaseContainer;
