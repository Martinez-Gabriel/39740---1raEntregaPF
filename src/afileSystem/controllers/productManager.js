import * as fs from "fs";

class ProductManager {
  idProduct = 0;
  #products;

  constructor() {
    this.#products = [];
    this.path = "./src/db/productsDB.json";
  }

  async loadData() {
    this.#products = await this.getProducts();
  }

  async getProducts() {
    try {
      const contenido = await fs.promises.readFile(this.path, {
        encoding: "utf-8",
      });
      let lastId = JSON.parse(contenido);
      this.idProduct = lastId[lastId.length - 1].id;
      return JSON.parse(contenido);
    } catch (error) {
      console.log(`El archivo ${this.path} no existe, creando...`);
      await fs.promises.writeFile(this.path, "[]");
      return [];
    }
  }

  async addProduct(newProduct) {
    try {
      if (!newProduct) {
        throw new Error("no se puede crear un producto vacio");
      }

      const arrayProducts = await this.getProducts();
      if (arrayProducts.find((p) => p.code === newProduct.code)) {
        throw new Error("No se puede crear un producto con code repetido");
      }

      arrayProducts.push({ id: ++this.idProduct, ...newProduct });

      await fs.promises.writeFile(this.path, JSON.stringify(arrayProducts));
    } catch (error) {
      throw new Error();
    }
  }

  async getProductsById(id) {
    const productById = await fs.promises.readFile(this.path, {
      encoding: "utf-8",
    });
    const DBParse = JSON.parse(productById);
    const contenido = DBParse.find((p) => p.id === id);
    if (!contenido) throw new Error("ERROR, no se encuentra el producto!");
    return contenido;
  }

  async updateProduct(id, newProduct) {
    try {
      let readProducts = await fs.promises.readFile(this.path, {
        encoding: "utf-8",
      });
      const productsParse = JSON.parse(readProducts);
      const productId = productsParse.findIndex((product) => product.id === id);
      productsParse.splice(productId, 1, { id, ...newProduct });
      await fs.promises.writeFile(this.path, JSON.stringify(productsParse));
      return { message: `producto modificado correctamente!` };
    } catch (e) {
      throw new Error(`ERROR, no se puede actualizar el producto!`);
    }
  }

  async deleteProduct(id) {
    try {
      let readProducts = await fs.promises.readFile(this.path, {
        encoding: "utf-8",
      });
      const productParse = JSON.parse(readProducts);
      const deleteProduct = productParse.filter((p) => p.id !== id);
      await fs.promises.writeFile(this.path, JSON.stringify(deleteProduct));
      return { message: `El producto ${id} fue eliminado con exito` };
    } catch (e) {
      throw new Error(e);
    }
  }
}

export default ProductManager;
