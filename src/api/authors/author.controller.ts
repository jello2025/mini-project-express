import { Request, Response, NextFunction } from "express";
import Author from "../../models/Author";

export const getAllAuthors = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authors = await Author.find();
    return res.json(authors);
  } catch (err) {
    next(err);
  }
};

export const getAuthorById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { authorId } = req.params;
  try {
    const foundAuthor = await Author.findById(authorId);
    if (foundAuthor) {
      return res.status(200).json(foundAuthor);
    } else {
      return res.status(404).json({ message: "couldnt find author" });
    }
  } catch (err) {
    next(err);
  }
};

export const createAuthor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newAuthor = await Author.create(req.body);
    return res.status(201).json(newAuthor);
  } catch (err) {
    next(err);
  }
};

export const updateAuthorById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { authorId } = req.params;
  try {
    const foundAuthor = await Author.findById(authorId);
    if (!foundAuthor) {
      return res.status(404).json({ message: "Author not found" });
    }

    await foundAuthor.updateOne(req.body);
    const updatedAuthor = await Author.findById(authorId);
    return res.json(updatedAuthor);
  } catch (err) {
    next(err);
  }
};

export const deleteAuthor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { authorId } = req.params;
  try {
    const foundAuthor = await Author.findById(authorId);
    if (foundAuthor) {
      await foundAuthor.deleteOne();
      res.status(204).json({ message: "deleted succesfully" });
    } else {
      res.status(404).json({ messgage: "couldnt find author" });
    }
  } catch (err) {
    next(err);
  }
};
