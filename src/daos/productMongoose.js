import productSchema from "../models/productSchema.js";

class ProductMongoose {
  async find() {
    const products = await productSchema.find();

    return products.map((document) => ({
      id: document._id,
      title: document.Title,
      description: document.Description,
      code: document.Code,
      price: document.Price,
      status: document.Status,
      stock: document.Stock,
      category: document.Category,
      thumbnail: document.Thumbnail,
      enable: document.Enable,
    }));
  }

  async getOne(id) {
    const product = await productSchema.findOne({ _id: id });

    return {
      id: product._id,
      title: product.Title,
      description: product.Description,
      code: product.Code,
      price: product.Price,
      status: product.Status,
      stock: product.Stock,
      category: product.Category,
      thumbnail: product.Thumbnail,
      enable: product.Enable,
    };
  }

  async create(data) {
    const product = await productSchema.create(data);

    return {
      id: product._id,
      title: product.Title,
      description: product.Description,
      code: product.Code,
      price: product.Price,
      status: product.Status,
      stock: product.Stock,
      category: product.Category,
      thumbnail: product.Thumbnail,
      enable: product.Enable,
    };
  }

  async updateOne(id, data) {
    const product = await productSchema.findOneAndUpdate({ _id: id }, data, {
      new: true,
    });

    return {
      id: product._id,
      title: product.Title,
      description: product.Description,
      code: product.Code,
      price: product.Price,
      status: product.Status,
      stock: product.Stock,
      category: product.Category,
      thumbnail: product.Thumbnail,
      enable: product.Enable,
    };
  }

  async deleteOne(id) {
    return productSchema.deleteOne({ _id: id });
  }
}

export default ProductMongoose;
