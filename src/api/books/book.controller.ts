import { Request, Response, NextFunction } from "express";
import Book from "../../models/Book";

export const getAllBooks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const books = await Book.find().populate("author").populate("category");
    return res.json(books);
  } catch (err) {
    next(err);
  }
};

export const getBookById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { bookId } = req.params;
  try {
    const foundBook = await Book.findById(bookId)
      .populate("author")
      .populate("category");
    if (bookId) {
      res.status(200).json(foundBook);
    } else {
      res.status(404).json({ message: "couldnt find book" });
    }
  } catch (err) {
    next(err);
  }
};

export const createBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newBook = await Book.create(req.body);
    if (newBook) {
      res.status(201).json(newBook);
    } else {
      res.status(404).json({ message: "couldnt find book" });
    }
  } catch (err) {
    next(err);
  }
};

export const updateBookById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { bookId } = req.params;
  try {
    const foundBook = await Book.findById(bookId);
    if (!foundBook) {
      return res.status(404).json({ message: "Book not found" });
    }

    await foundBook.updateOne(req.body);
    const updatedBook = await Book.findById(bookId);
    return res.json(updatedBook);
  } catch (err) {
    next(err);
  }
};

export const deleteBookById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { bookId } = req.params;
  try {
    const foundBook = await Book.findById(bookId);
    if (foundBook) {
      await foundBook.deleteOne();
      res.status(204).json({ message: "deleted succesfully" });
    } else {
      res.status(404).json({ message: "couldnt find book" });
    }
  } catch (err) {
    next(err);
  }
};
