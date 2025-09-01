import { model, Schema } from "mongoose";

const BookSchema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: Schema.ObjectId, ref: "Author" },
    category: [{ type: Schema.ObjectId, ref: "Category" }],
    image: { type: String },
  },
  { timestamps: true }
);

const Book = model("Book", BookSchema);

export default Book;
