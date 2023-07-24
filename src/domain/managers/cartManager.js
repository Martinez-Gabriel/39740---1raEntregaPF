import CartDao from "../../data/daos/cartDao.js";

class CartManager {
  constructor() {
    this.cartDao = new CartDao();
  }

  async find() {
    return this.cartDao.find();
  }

  async create() {
    return this.cartDao.create();
  }

  async addProduct(cid, pid) {
    return this.cartDao.addProduct(cid, pid);
  }

  async getOne(cid) {
    return this.cartDao.getOne(cid);
  }

  async updateProductQuantity(cid, pid, quantity) {
    return this.cartDao.updateProductQuantity(cid, pid, quantity);
  }

  async deleteOneProduct(cid, pid) {
    return this.cartDao.deleteOneProduct(cid, pid);
  }

  async deleteAllProducts(cid) {
    return this.cartDao.deleteAllProducts(cid);
  }
}

export default CartManager;
