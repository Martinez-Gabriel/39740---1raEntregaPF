import mongoose, { Schema } from "mongoose";

const cartCollection = "carts";

const CartSchema = new Schema({
  products: {
    type: [
      {
        _id: {
          type:mongoose.Schema.Types.ObjectId,
          ref:"products"
        },
        quantity: {
          type: Number,
        },
      },
    ],
    default: [],
  },
});

export default mongoose.model(cartCollection, CartSchema);
