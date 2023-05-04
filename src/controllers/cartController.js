import CartManager from "../managers/cartManager.js";

class CartController {
  static list = async (req, res) => {
    const manager = new CartManager();

    const carts = await manager.find();
    res.send({ status: "success", carts });
  };
}

export const getOne = async (req, res) => {
  const { id } = req.params;

  const manager = new CartManager();

  const cart = await manager.getOne(id);
  res.send({ status: "success", cart: cart });
};

export const save = async (req, res) => {
  const manager = new CartManager();
  const cart = await manager.create(req.body);

  res.send({ status: "success", cart, message: "Cart created." });
};

export const update = async (req, res) => {
  const { id } = req.params;

  const manager = new CartManager();

  const result = await manager.updateOne(id, req.body);

  res.send({ status: "success", result, message: "Cart updated." });
};

export const deleteOne = async (req, res) => {
  const { id } = req.params;

  const manager = new CartManager();

  const cart = await manager.deleteOne(id);
  res.send({ status: "success", message: "Cart deleted." });
};

export default CartController;
