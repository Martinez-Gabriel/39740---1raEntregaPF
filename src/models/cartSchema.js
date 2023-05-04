import mongoose, { Schema } from "mongoose";

const cartCollection = "carts";

const CartSchema = new Schema({
  products: [
    {
      id: { type: Schema.Types.Number, require: true },
      quantity: { type: Schema.Types.Number, require: true },
    },
  ],
  enable: { type: Schema.Types.Boolean, require: true },
});

export default mongoose.model(cartCollection, CartSchema);
