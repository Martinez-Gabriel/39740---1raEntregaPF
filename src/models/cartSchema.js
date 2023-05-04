import mongoose, { Schema } from "mongoose";

const cartCollection = 'carts';

const CartSchema = new Schema({
  Products: [{ type: Schema.Types.String, require: true }],
  Enable: { type: Schema.Types.Boolean, require: true }
});

export default mongoose.model(cartCollection, CartSchema);

