import { db } from '../../db.js'

export const addToFav = (req,res) => {

    const q = "INSERT INTO favourites VALUES (?)"

    const { userid, bookid } = req.body

    db.query(q, [userid, bookid], (err, data) => {
        if(err) res.status(500).json(err)
        return res.status(200).json("Book added to favourites")
    })
}