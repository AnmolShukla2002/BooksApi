import Book from "../models/book.js";

export const createBook = async (req, res) => {
  try {
    const { title, author, summary } = req.body;
    const newBook = new Book({
      title,
      author,
      summary,
    });
    const createdBook = await newBook.save();
    res.status(201).json({
      success: true,
      message: "Book Created Successfully",
      book: createdBook,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to create new book",
      error: error.message,
    });
  }
};

export const fetchAllBooks = async (req, res) => {
  try {
    const books = await Book.find();

    if (books.length === 0) {
      res.status(200).json({
        success: true,
        message: "Currently no books available",
        books: [],
      });
    } else {
      res.status(200).json({
        success: true,
        message: "All Books Retrieved Successfully",
        books: books,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve books",
      error: error.message,
    });
  }
};

export const fetchSingleBook = async (req, res) => {
  try {
    const id = req.params.id;
    const book = await Book.findById(id);
    if (!book) {
      res.status(404).json({
        success: false,
        message: "Book Not Found",
        data: [],
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Book found",
        data: book,
      });
    }
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Cannot find the book",
      error: error.message,
    });
  }
};

export const updateBook = async (req, res) => {
  try {
    const id = req.params.id;
    const updateBook = await Book.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (updateBook) {
      res.status(200).json({
        success: true,
        message: "Book details updated successfully",
        book: updateBook,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update book details",
      error: error.message,
    });
  }
};

export const deleteBook = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteBook = await Book.findByIdAndDelete(id);
    if (deleteBook) {
      res.status(200).json({
        success: true,
        message: "Book deleted successfully",
        book: deleteBook,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete the book",
      error: error.message,
    });
  }
};
