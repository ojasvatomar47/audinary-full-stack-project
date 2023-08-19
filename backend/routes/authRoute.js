import express from "express";
import { register } from "../controllers/authControllers/registerController.js";
import { login } from "../controllers/authControllers/loginController.js"
import { logout } from "../controllers/authControllers/logoutController.js"

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

export default router;