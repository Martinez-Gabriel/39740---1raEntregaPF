import * as fs from "fs";

class CartManager {
  #cartId;

  constructor() {
    this.#cartId = 0;
    this.path = "./db/cartsDB.json";
  }

  async getCarts() {
    try {
      const contenido = await fs.promises.readFile(this.path, {
        encoding: "utf-8",
      });
      let lastId = JSON.parse(contenido)
      this.#cartId = lastId[lastId.length-1].id;
      return JSON.parse(contenido);
    } catch (error) {
      console.log(`El archivo ${this.path} no existe, creando...`);
      await fs.promises.writeFile(this.path, "[]");
      return [];
    }
  }

  async getCartById(id) {
    try {
      const cartById = await fs.promises.readFile(this.path, {
        encoding: "utf-8",
      });
      const cartDBParse = JSON.parse(cartById);
      const contenido = cartDBParse.find((p) => p.id === id);

      if (!contenido) throw new Error("El carrito no existe!");

      return contenido;
    } catch (error) {
      throw { error: error.message };
    }
  }

  async addCart(productsCart) {
    try {
      if (!productsCart) throw new Error("No se puede crear un carrito vacio!");

      const arrayCarts = await this.getCarts();
      const createCart = [
        ...arrayCarts,
        {
          id: ++this.#cartId,
          products: productsCart,
        },
      ];

      await fs.promises.writeFile(this.path, JSON.stringify(createCart));

      return { message: `Carrito de compras creado con exito!` };
    } catch (error) {
      throw error;
    }
  }

  async getProductListByCartId(id) {
    try {
      const cart = await this.getCartById(id);
      return cart.products;
    } catch (error) {
      throw error;
    }
  }

  async addProductToCart(cid, pid) {
    try {
      const arrayCarts = await this.getCarts();
      const cart = arrayCarts.find(item => item.id === cid);
      if(!cart) throw new Error ('El carrito con esa ID no existe!');
      
      const product = cart.products.find((item) => item.id === pid);
      product
        ? (product.quantity += 1)
        : (cart.products = [...cart.products, { id: pid, quantity: 1 }]);

      await fs.promises.writeFile(this.path, JSON.stringify(arrayCarts));

      return { message: `El producto se agrego correctamente` };
    } catch (error) {
      throw error;
    }
  }
}

export default CartManager;
