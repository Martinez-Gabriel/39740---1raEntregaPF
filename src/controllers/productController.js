import ProductManager from "../managers/productManager.js";
import idValidation from "../validations/idValidation.js";
import productSaveValidation from "../validations/ProductValidation/productSaveValidation.js";
import productUpdateValidation from "../validations/ProductValidation/productUpdateValidation.js"

class ProductController {
  static getAll = async (req, res, next) => {
    try {
      let { category, limit, page } = req.query;
      const manager = new ProductManager();
      const products = await manager.findPaginate(category, limit, page);
  
      res.send({ status: "success", products });
    } catch(e) {
      next(e);
    }
  };
}

export const getOne = async (req, res, next) => {
  try {
    await idValidation.parseAsync(req.params);

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
    await productSaveValidation.parseAsync({...req.body});

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
    await productUpdateValidation.parseAsync({ ...req.params, ...req.body});

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
    await idValidation.parseAsync(req.params);

    const { id } = req.params;

    const manager = new ProductManager();

    const product = await manager.deleteOne(id);
    res.status(200).send({ status: "success", message: "Product deleted." });
  } catch (e) {
    next(e);
  }
};

export default ProductController;
