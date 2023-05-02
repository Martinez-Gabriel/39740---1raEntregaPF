import ProductsSchema from "../models/productsSchema.js";

class ProductMongoose {
  async find() {
    const products = await ProductsSchema.find();

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
      Status: document.Status,
    }));
  }

  async getOne(id) {
    const product = await ProductsSchema.findOne({ _id: id });

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
      Status: product.Status,
    };
  }

  async create(data) {
    const product = await ProductsSchema.create(data);

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
      Status: product.Status,
    };
  }

  async updateOne(id, data) {
    const product = await ProductsSchema.findOneAndUpdate({ _id: id }, data, {
      new: true,
    });

    return {
      id: document._id,
      Title: document.Title,
      Description: document.Description,
      Code: document.Code,
      Price: document.Price,
      Status: document.Status,
      Stock: document.Stock,
      Category: document.Category,
      Thumbnail: document.Thumbnail,
      Status: document.Status,
    };
  }

  async deleteOne(id) {
    return ProductsSchema.deleteOne({ _id: id });
  }
}

export default ProductMongoose;
