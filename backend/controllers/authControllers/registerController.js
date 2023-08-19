import { db } from "../../db.js"
import bcrypt from "bcryptjs"

export const register = (req, res) => {

  // checking if the user already exists
  const q = "SELECT * FROM users WHERE email = ? OR username = ?";

  db.query(q, [req.body.email, req.body.username], (err, data) => {
    if (err) return res.status(500).json(err)
    if (data.length) return res.status(409).json("User already exists!")

    // hashing the password
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(req.body.password, salt)

    const q = "INSERT INTO users(`username`,`email`,`password`) VALUES (?)"
    const values = [req.body.username, req.body.email, hash]

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err)
      return res.status(200).json("User has been created.")
    })
  })
}