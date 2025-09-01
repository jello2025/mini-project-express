import { Router } from "express";
import {
  getAllBooks,
  getBookById,
  createBook,
  updateBookById,
  deleteBookById,
} from "./book.controller";

export const bookRouter = Router();

bookRouter.get("/", getAllBooks);
bookRouter.get("/:bookId", getBookById);
bookRouter.post("/", createBook);
bookRouter.put("/:bookId", updateBookById);
bookRouter.delete("/:bookId", deleteBookById);
