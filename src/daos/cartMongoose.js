import CartSchema from "../models/cartSchema.js";

class CartMongoose {
  async find() {
    const carts = await CartSchema.find();

    return carts.map((document) => ({
      id: document._id,
      Products: document.Products,
      Enable: document.Enable,
    }));
  }

  async getOne(id) {
    const cart = await CartSchema.findOne({ _id: id });

    return {
        id: cart._id,
        Products: cart.Products,
        Enable: cart.Enable,
    };
  }

  async create(data) {
    const cart = await CartSchema.create(data);

    return {
        id: cart._id,
        Products: cart.Products,
        Enable: cart.Enable,
    };
  }

  async updateOne(id, data) {
    const cart = await CartSchema.findOneAndUpdate({ _id: id }, data, {
      new: true,
    });

    return {
        id: cart._id,
        Products: cart.Products,
        Enable: cart.Enable,
    };
  }

  async deleteOne(id) {
    return CartSchema.deleteOne({ _id: id });
  }
}

export default CartMongoose;
