import express from 'express'
import { addToFav } from '../controllers/favControllers/addToFav.js'
import { getFav } from '../controllers/favControllers/getFav.js'

const router = express.Router()

router.post("/", addToFav)
router.get("/", getFav)

export default router