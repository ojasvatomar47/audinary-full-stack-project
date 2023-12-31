import express from 'express'
import { addToFav } from '../controllers/favControllers/addToFav.js'
import { getUserFav } from '../controllers/favControllers/getUserFav.js'
import { removeFromFav } from '../controllers/favControllers/removeFromFav.js'
import { getAllFav } from '../controllers/favControllers/getAllFav.js'

const router = express.Router()

router.post("/add", addToFav)
router.delete("/remove", removeFromFav)
router.get("/:userid", getUserFav)
router.get("/getAllFav/:userid", getAllFav)

export default router