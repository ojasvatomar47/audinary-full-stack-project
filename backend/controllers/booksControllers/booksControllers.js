import { db } from '../../db.js'

export const getBooks = (req, res) => {

    const q = req.query.genre ? "SELECT * FROM books WHERE genre = ?" : "SELECT * FROM books"

    db.query(q, [req.query.genre], (err, data) => {
        if (err) return res.status(500).send(err)
        return res.status(200).json(data)
    })
}

export const getBook = (req, res) => {

    const idString = req.params.id; // To get the raw string value
    const id = parseInt(idString.replace(':', ''), 10);

    const q = "SELECT * FROM books WHERE bookid = ?"

    db.query(q, [id], (err, data) => {
        if (err) return res.status(500).json(err)
        return res.status(200).json(data[0])
    })

}

export const addBook = (req, res) => {

}

export const deleteBook = (req, res) => {

}

export const putBook = (req, res) => {

}