import { db } from '../../db.js';

export const addToFav = (req, res) => {
  const q = "INSERT INTO favourites (userid, bookid) VALUES (?, ?)";

  const { userid, bookid } = req.body;

  db.query(q, [userid, bookid], (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "An error occurred while adding the book to favorites." });
    }
    return res.status(200).json("Book added to favorites");
  });
};
