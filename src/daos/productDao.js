import productSchema from "../models/productModel.js";

class ProductDao {
  async find() {
    const products = await productSchema.find();

    return products.map((document) => ({
      id: document._id,
      title: document.title,
      description: document.description,
      code: document.code,
      price: document.price,
      status: document.status,
      stock: document.stock,
      category: document.category,
      thumbnail: document.thumbnail,
      enable: document.enable,
    }));
  }

  async getOne(id) {
    const product = await productSchema.findOne({ _id: id });

    return {
      id: product._id,
      title: product.title,
      description: product.description,
      code: product.code,
      price: product.price,
      status: product.status,
      stock: product.stock,
      category: product.category,
      thumbnail: product.thumbnail,
      enable: product.enable,
    };
  }

  async create(data) {
    const product = await productSchema.create(data);

    return {
      id: product._id,
      title: product.title,
      description: product.description,
      code: product.code,
      price: product.price,
      status: product.status,
      stock: product.stock,
      category: product.category,
      thumbnail: product.thumbnail,
      enable: product.enable,
    };
  }

  async updateOne(id, data) {
    const product = await productSchema.findOneAndUpdate({ _id: id }, data, {
      new: true,
    });

    return {
      id: product._id,
      title: product.title,
      description: product.description,
      code: product.code,
      price: product.price,
      status: product.status,
      stock: product.stock,
      category: product.category,
      thumbnail: product.thumbnail,
      enable: product.enable,
    };
  }

  async deleteOne(id) {
    return productSchema.deleteOne({ _id: id });
  }
}

export default ProductDao;
