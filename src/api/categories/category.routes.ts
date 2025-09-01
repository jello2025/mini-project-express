import { Router } from "express";
import {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategoryById,
  deleteCategoryById,
} from "./category.controller";

export const categoryRouter = Router();

categoryRouter.get("/", getAllCategories);
categoryRouter.get("/:categoryId", getCategoryById);
categoryRouter.post("/", createCategory);
categoryRouter.put("/:categoryId", updateCategoryById);
categoryRouter.delete("/:categoryId", deleteCategoryById);
