import { db } from "../../db.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"


export const logout = (req, res) => {
  
  res.clearCookie("access_token", {
    sameSite: "none",
    secure: true
  }).status(200).json("User has been logged out")
  
}