import mongoose, { Schema } from "mongoose";

const productCollection = 'products';

const ProductSchema = new Schema({
  Title: { type: Schema.Types.String, index: true, require: true },
  Description: { type: Schema.Types.String, require: true },
  Code: { type: Schema.Types.Number, require: true },
  Price: { type: Schema.Types.Number, require: true },
  Status: { type: Schema.Types.String, require: true },
  Stock: { type: Schema.Types.Number, require: true },
  Category: { type: Schema.Types.String, require: true },
  Thumbnail: { type: Schema.Types.String, require: true },
  Enable: { type: Schema.Types.Boolean, require: true }
});

export default mongoose.model(productCollection, ProductSchema);

