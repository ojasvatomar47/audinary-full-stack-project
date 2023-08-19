import express from 'express'
import { db } from './db.js'
import cors from 'cors'
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import cookieParser from 'cookie-parser';

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors())

app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)

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