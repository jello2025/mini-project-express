import { model, Schema } from "mongoose";

const CategorySchema = new Schema({
  name: { type: String, required: true },
  books: [{ type: Schema.ObjectId, ref: "Book" }],
});

const Category = model("Category", CategorySchema);

export default Category;
