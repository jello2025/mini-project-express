import { model, Schema } from "mongoose";

const AuthorSchema = new Schema({
  name: { type: String, required: true },
  country: { type: String, required: true },
  books: [{ type: Schema.ObjectId, ref: "Book" }],
});

const Author = model("Author", AuthorSchema);

export default Author;
