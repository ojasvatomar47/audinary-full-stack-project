import { db } from "../../db.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"


export const login = (req, res) => {

  // checking if the user exists
  const q = "SELECT * FROM users WHERE username = ?";

  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("User not found!");

    // checking if the password is correct password
    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      data[0].password // data is an array and it's first index is user
    );

    if (!isPasswordCorrect)
      return res.status(400).json("Wrong username or password!");

    const token = jwt.sign({ id: data[0].id }, "jwtkey");
    const { password, ...other } = data[0]; // since we do not need o send password to cookie

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(other);
  });
};