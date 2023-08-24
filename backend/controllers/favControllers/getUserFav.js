import { db } from '../../db.js';

export const getUserFav = (req, res) => {
  const { userid } = req.params;
  
  const userId = userid.replace(":", "")

  const q = "SELECT bookid FROM favourites WHERE userid = ?";

  db.query(q, [userId], (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "An error occurred while fetching user favorites." });
    }

    const favoriteBooks = data.map(row => row.bookid);
    return res.status(200).json(favoriteBooks);
  });
};
