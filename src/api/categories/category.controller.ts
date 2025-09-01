import { NextFunction, Request, Response } from "express";
import Category from "../../models/Category";

export const getAllCategories = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    next(err);
  }
};

export const getCategoryById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { categoryId } = req.params;
  try {
    const foundCategory = await Category.findById(categoryId);
    if (foundCategory) {
      return res.status(200).json(foundCategory);
    } else {
      return res.status(404).json({ message: "couldnt find category" });
    }
  } catch (err) {
    next(err);
  }
};

export const createCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newCategory = Category.create(req.body);
    return res.status(201).json(newCategory);
  } catch (err) {
    next(err);
  }
};

export const updateCategoryById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { categoryId } = req.params;
  try {
    const foundCategory = await Category.findById(categoryId);
    if (!foundCategory) {
      return res.status(404).json("couldnt find category");
    }

    await foundCategory.updateOne(req.body);
    const updatedCategory = await Category.findById(categoryId);
    return res.json(updatedCategory);
  } catch (err) {
    next(err);
  }
};

export const deleteCategoryById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { categoryId } = req.params;
  try {
    const foundCategory = await Category.findById(categoryId);
    if (foundCategory) {
      await foundCategory.deleteOne();
      return res.status(204).json({ message: "deleted succesfully" });
    } else {
      res.status(404).json({ messgage: "couldnt find category" });
    }
  } catch (err) {
    next(err);
  }
};
