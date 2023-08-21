import express from 'express'
import { addBook, deleteBook, getBook, getBooks, putBook, } from '../controllers/booksControllers/booksControllers.js'

const router = express.Router()

router.get("/", getBooks)
router.get("/:id", getBook)
router.post("/", addBook)
router.delete("/:id", deleteBook)
router.put("/:id", putBook)

export default router