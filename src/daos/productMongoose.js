import productSchema from "../models/productSchema.js";

class ProductMongoose {
  async find() {
    const products = await productSchema.find();

    return products.map((document) => ({
      id: document._id,
      Title: document.Title,
      Description: document.Description,
      Code: document.Code,
      Price: document.Price,
      Status: document.Status,
      Stock: document.Stock,
      Category: document.Category,
      Thumbnail: document.Thumbnail,
      Enable: document.Enable,
    }));
  }

  async getOne(id) {
    const product = await productSchema.findOne({ _id: id });

    return {
      id: product._id,
      Title: product.Title,
      Description: product.Description,
      Code: product.Code,
      Price: product.Price,
      Status: product.Status,
      Stock: product.Stock,
      Category: product.Category,
      Thumbnail: product.Thumbnail,
      Enable: product.Enable,
    };
  }

  async create(data) {
    const product = await productSchema.create(data);

    return {
      id: product._id,
      Title: product.Title,
      Description: product.Description,
      Code: product.Code,
      Price: product.Price,
      Status: product.Status,
      Stock: product.Stock,
      Category: product.Category,
      Thumbnail: product.Thumbnail,
      Enable: product.Enable,
    };
  }

  async updateOne(id, data) {
    const product = await productSchema.findOneAndUpdate({ _id: id }, data, {
      new: true,
    });

    return {
      id: product._id,
      Title: product.Title,
      Description: product.Description,
      Code: product.Code,
      Price: product.Price,
      Status: product.Status,
      Stock: product.Stock,
      Category: product.Category,
      Thumbnail: product.Thumbnail,
      Enable: product.Enable,
    };
  }

  async deleteOne(id) {
    return productSchema.deleteOne({ _id: id });
  }
}

export default ProductMongoose;
