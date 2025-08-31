import { Router } from "express";
import {
  getAllAuthors,
  getAuthorById,
  createAuthor,
  updateAuthorById,
  deleteAuthor,
} from "./author.controller";

export const authorRouter = Router();

authorRouter.get("/", getAllAuthors);
authorRouter.get("/:authorId", getAuthorById);
authorRouter.post("/", createAuthor);
authorRouter.put("/:authorId", updateAuthorById);
authorRouter.delete("/:authorId", deleteAuthor);
