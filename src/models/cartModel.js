import mongoose, { Schema } from "mongoose";

const cartCollection = "carts";

const CartSchema = new Schema({
  products: {
    type: [
      {
        _id: {
          type: Schema.Types.ObjectId
        },
        quantity: {
          type: Number
        }
      }
    ],
    default: []
  }
});



export default mongoose.model(cartCollection, CartSchema);
