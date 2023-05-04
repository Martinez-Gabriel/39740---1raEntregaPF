import CartSchema from "../models/cartSchema.js";

class CartMongoose {
  async find() {
    const carts = await CartSchema.find();

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

  async getOne(id) {
    const cart = await CartSchema.findOne({ _id: id });

    return {
      products: [
        {
          id: cart._id,
          quantity: cart._quantity,
        },
      ],
      enable: cart.enable,
    };
  }

  async create(data) {
    const cart = await CartSchema.create(data);

    return {
      products: [
        {
          id: cart._id,
          quantity: cart._quantity,
        },
      ],
      enable: cart.enable,
    };
  }

  async updateOne(id, data) {
    const cart = await CartSchema.findOneAndUpdate({ _id: id }, data, {
      new: true,
    });

    return {
      products: [
        {
          id: cart._id,
          quantity: cart._quantity,
        },
      ],
      enable: cart.enable,
    };
  }

  async deleteOne(id) {
    return CartSchema.deleteOne({ _id: id });
  }
}

export default CartMongoose;
