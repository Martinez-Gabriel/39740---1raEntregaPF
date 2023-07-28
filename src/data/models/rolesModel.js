import mongoose, { Schema } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const RoleSchema = new Schema({
  name: { type: Schema.Types.String },
  versionKey: false
});

ProductSchema.plugin(mongoosePaginate);

export default mongoose.model(RoleSchema);