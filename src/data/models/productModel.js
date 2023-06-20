import mongoose, { Schema } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const productCollection = "products";

const ProductSchema = new Schema({
  title: { type: Schema.Types.String, index: true, require: true },
  description: { type: Schema.Types.String, require: true },
  code: { type: Schema.Types.Number, require: true },
  price: { type: Schema.Types.Number, require: true },
  status: { type: Schema.Types.String, require: true },
  stock: { type: Schema.Types.Number, require: true },
  category: { type: Schema.Types.String, require: true },
  thumbnail: { type: Schema.Types.String, require: true },
  enable: { type: Schema.Types.Boolean, require: true },
});

ProductSchema.plugin(mongoosePaginate);

export default mongoose.model(productCollection, ProductSchema);
