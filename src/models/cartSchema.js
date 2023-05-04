import mongoose, { Schema } from "mongoose";

const cartCollection = 'carts';

const CartSchema = new Schema({
  products: [{ type: Schema.Types.String, require: true }],
  enable: { type: Schema.Types.Boolean, require: true }
});

export default mongoose.model(cartCollection, CartSchema);

