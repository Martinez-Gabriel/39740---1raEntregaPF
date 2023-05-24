import CartManager from "../managers/cartManager.js";

class CartController {
  static list = async (req, res) => {
    const manager = new CartManager();

    const carts = await manager.find();
    res.send({ status: "success", carts });
  };
}

export const create = async (req, res, next) => {
  try {
    const manager = new CartManager();
    const cart = await manager.create();
    res.status(201).send({ status: "success", payload: cart });
  } catch (e) {
    next(e);
  }
};

export const addProduct = async (req, res, next) => {
  try {
    const { cid, pid } = req.params;
    const manager = new CartManager();
    const cart = await manager.addProduct(cid, pid);
    res.status(201).send({ status: "success", payload: cart });
  } catch (error) {
    next(e);
  }
};

export const getOne = async (req, res, next) => {
  try {
    const { cid } = req.params;
    const manager = new CartManager();
    const cart = await manager.get(cid);
    res.status(200).send({ status: "success", payload: cart });
  } catch (e) {
    next(e);
  }
};

export const updateProductQuantity = async (req, res, next) => {
  try {
    const { cid, pid } = req.params;
    const { quantity } = req.body;
    const manager = new CartManager();
    const updatedCart = await manager.updateProductQuantity(cid, pid, quantity);
    if (!updatedCart)
      return res
        .status(404)
        .send({ status: "error", message: "Cart or product not found" });

    res.status(200).send({ status: "success", payload: updatedCart });
  } catch (e) {
    next(e);
  }
};

export const deleteOneProduct = async (req, res, next) => {
  try {
    const { cid, pid } = req.params;
    const manager = new CartManager();
    await manager.deleteOneProduct(cid, pid);
    res.status(200).send({ status: "success" });
  } catch (e) {
    next(e);
  }
};

export const deleteAllProducts = async (req, res, next) => {
  try {
    const { cid } = req.params;
    const manager = new CartManager();
    const cart = await manager.deleteAllProducts(cid);
    res.status(200).send({ status: "success", payload: cart });
  } catch (e) {
    next(e);
  }
};

export default CartController;
