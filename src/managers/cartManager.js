import CartMongoose from "../daos/cartMongoose.js";

class CartManager {
  constructor() {
    this.cartDao = new CartMongoose();
  }

  async find() {
    return this.cartDao.find();
  }

  async getOne(id) {
    return this.cartDao.getOne(id);
  }

  async create(data) {
    return this.cartDao.create(data);
  }

  async updateOne(id, data) {
    return this.cartDao.updateOne(id, data);
  }

  async deleteOne(id) {
    return this.cartDao.deleteOne(id);
  }
}

export default CartManager;
