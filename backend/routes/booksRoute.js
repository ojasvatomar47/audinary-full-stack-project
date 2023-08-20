import express from 'express'
import { addPost, deletePost, getPost, getPosts, putPost } from '../controllers/booksControllers/booksControllers.js'

const router = express.Router()

router.get("/", getPosts)
router.get("/:id", getPost)
router.post("/", addPost)
router.delete("/:id", deletePost)
router.put("/:id", putPost)

export default router