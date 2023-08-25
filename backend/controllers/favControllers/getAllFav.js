import { db } from '../../db.js'

export const getAllFav = (req, res) => {

    const { userid } = req.params

    const userId = userid.replace(":","")

    const q = "SELECT b.* FROM favourites f JOIN books b ON f.bookid = b.bookid WHERE f.userid = ?"

    db.query(q, [userId], (err, data) => {
        if(err) {
            console.log(err)
            return res.status(500).json({ error: "An error occurred while fetching user favorites." });
        }

        return res.status(200).json(data)
    })
}