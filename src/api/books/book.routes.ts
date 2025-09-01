import { Router } from "express";
import {
  getAllBooks,
  getBookById,
  createBook,
  updateBookById,
  deleteBookById,
} from "./book.controller";
import upload from "../../middlewares/multer";

export const bookRouter = Router();

bookRouter.get("/", getAllBooks);
bookRouter.get("/:bookId", getBookById);
bookRouter.post("/", upload.single("image"), createBook);
bookRouter.put("/:bookId", updateBookById);
bookRouter.delete("/:bookId", deleteBookById);
