import mongoose, { Schema } from "mongoose";

const productList = 'products';

const ProductSchema = new Schema({
  Title: { type: Schema.Types.String, index: true, require: true },
  Description: { type: Schema.Types.String, require: true },
  Code: { type: Schema.Types.Number, require: true },
  Price: { type: Schema.Types.Number, require: true },
  Status: { type: Schema.Types.String, require: true },
  Stock: { type: Schema.Types.Number, require: true },
  Category: { type: Schema.Types.String, require: true },
  Thumbnail: { type: Schema.Types.String, require: true },
  Status: { type: Schema.Types.Boolean, require: true }
});

export default mongoose.model(productList, ProductSchema);

