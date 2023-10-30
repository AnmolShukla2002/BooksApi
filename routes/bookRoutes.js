import express from "express";
import {
  createBook,
  fetchAllBooks,
  fetchSingleBook,
  updateBook,
  deleteBook,
} from "../controllers/bookController.js";

const router = express.Router();

router.post("/", createBook);
router.get("/get-all-books", fetchAllBooks);
router.get("/get-single-book/:id", fetchSingleBook);
router.put("/update-book/:id", updateBook);
router.delete("/delete-book/:id", deleteBook);

export default router;
