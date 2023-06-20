import CartModel from "../models/cartModel.js";

class CartDao {
  async find() {
    const carts = await CartModel.find();

    return carts.map((document) => ({
      products: [
        {
          id: document._id,
          quantity: document._quantity,
        },
      ],
      enable: document.enable,
    }));
  }

  async create() {
    return CartModel.create({ products: [] });
  }

  async addProduct(cid, pid) {
    const updatedCart = await CartModel.findOneAndUpdate(
      { _id: cid, "products._id": pid },
      { $inc: { "products.$.quantity": 1 } },
      { new: true }
    );

    if (updatedCart) {
      return updatedCart;
    }
    const newCart = await CartModel.findByIdAndUpdate(
      cid,
      { $addToSet: { products: { _id: pid, quantity: 1 } } },
      { new: true }
    );
    return newCart;
  }

  async getOne(cid) {
    return CartModel.findById({ _id: cid });
  }

  updateProductQuantity(cid, pid, quantity) {
    return CartModel.findOneAndUpdate(
      { _id: cid, "products._id": pid },
      { $set: { "products.$.quantity": quantity } },
      { new: true }
    );
  }

  async deleteOneProduct(cid, pid) {
    return CartModel.findByIdAndUpdate(
      cid,
      { $pull: { products: { _id: pid } } },
      { new: true }
    );
  }

  deleteAllProducts(cid) {
    return CartModel.findByIdAndUpdate(
      { _id: cid },
      { $set: { products: [] } },
      { new: true }
    );
  }
}

export default CartDao;
