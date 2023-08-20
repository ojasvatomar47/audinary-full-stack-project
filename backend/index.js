import express from 'express'
import { db } from './db.js'
import cors from 'cors'
import authRoute from "./routes/authRoute.js";
import userRoute from "./routes/usersRoute.js";
import booksRoute from "./routes/booksRoute.js"
import cookieParser from 'cookie-parser';

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors())

app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/books", booksRoute)

app.get("/", (req,res) => {
    res.json("Hello there")
})

db.connect((error) => {
    if(error) {
        console.log(error)
    }
    else {
        console.log("Mysql connected!")
    }
})

app.listen(8800, () => {
    console.log("Connected to server!")
})