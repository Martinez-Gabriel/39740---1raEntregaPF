import ProductManager from "../managers/productManager.js";

class ProductController {
  static getAll = async (req, res) => {
    let { category, limit, page } = req.query;
    const manager = new ProductManager();
    const products = await manager.findPaginate(category, limit, page);

    res.send({ status: "success", products });
  };
}

export const getOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const manager = new ProductManager();
    const product = await manager.getOne(id);
    res.status(200).send({ status: "success", product: product });
  } catch (e) {
    next(e);
  }
};

export const save = async (req, res, next) => {
  try {
    const manager = new ProductManager();
    const product = await manager.create(req.body);

    res
      .status(200)
      .send({ status: "success", product, message: "Product created." });
  } catch (e) {
    next(e);
  }
};

export const update = async (req, res, next) => {
  try {
    const { id } = req.params;

    const manager = new ProductManager();

    const result = await manager.updateOne(id, req.body);

    res
      .status(200)
      .send({ status: "success", result, message: "Product updated." });
  } catch (e) {
    next(e);
  }
};

export const deleteOne = async (req, res, next) => {
  try {
    const { id } = req.params;

    const manager = new ProductManager();

    const product = await manager.deleteOne(id);
    res.status(200).send({ status: "success", message: "Product deleted." });
  } catch (e) {
    next(e);
  }
};

export default ProductController;
