import { db } from '../../db.js';

export const removeFromFav = (req, res) => {
  const q = "DELETE FROM favourites WHERE userid = ? AND bookid = ?";

  const { userid, bookid } = req.body;

  db.query(q, [userid, bookid], (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "An error occurred while deleting the book from your favorites." });
    }
    return res.status(200).json("Book removed from favorites");
  });
};
