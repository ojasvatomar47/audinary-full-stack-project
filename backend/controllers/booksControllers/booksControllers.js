import { db } from '../../db.js'

export const getPosts = (req, res) => {

    const q = req.query.genre ? "SELECT * FROM books WHERE genre = ?" : "SELECT * FROM books"

    db.query(q, [req.query.genre], (err, data) => {
        if(err) return res.send(err)
        return res.status(200).json(data)
    })
}

export const getPost = (req, res) => {
    
}

export const addPost = (req, res) => {
    
}

export const deletePost = (req, res) => {
    
}

export const putPost = (req, res) => {
    
}