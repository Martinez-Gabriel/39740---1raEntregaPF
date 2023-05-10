import ProductMongoose from "../daos/productDao.js";

class ProductManager {
  constructor() {
    this.productDao = new ProductMongoose();
  }

  async findPaginate(category, limit, page) {
    return this.productDao.findPaginate(category, limit, page);
  }

  async getOne(id) {
    return this.productDao.getOne(id);
  }

  async create(data) {
    return this.productDao.create(data);
  }

  async updateOne(id, data) {
    return this.productDao.updateOne(id, data);
  }

  async deleteOne(id) {
    return this.productDao.deleteOne(id);
  }
}

export default ProductManager;
