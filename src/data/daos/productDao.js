import productModel from "../models/productModel.js";

class ProductDao {
  async findPaginate(category, limit, page) {
    if (category) {
      return productModel.aggregate([{ $match: { category: category } }]);
    }
    if (!limit || limit <= 0) {
      return productModel.paginate({}, { limit: limit, page: page});
    }
    const products = await productModel.findPaginate();

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
    const product = await productModel.findOne({ _id: id });

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
    const product = await productModel.create(data);

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
    const product = await productModel.findOneAndUpdate({ _id: id }, data, {
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
    return productModel.deleteOne({ _id: id });
  }

}


export default ProductDao;
