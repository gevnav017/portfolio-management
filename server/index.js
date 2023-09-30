import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express()
app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    host:"ls-75adeffd5d0c21ef46d636991be193e27e5b1fe3.ctke02zwjdms.us-west-2.rds.amazonaws.com",
    port:"3306",
    user:"admin",
    password:"root1234",
    database:"dbcrud"
})

let message = ""

app.get("/", (req, res) => {
    res.json("hello backend")
})

app.get("/input", (req, res) => {
    const newMovie = req.body.newMovie
    console.log(newMovie)
    const q = "INSERT INTO movies (movie) VALUES (?)"
    db.query(q, newMovie, (err, data) => {
        if (err) return res.json(err)
        res.json(data)
    })
})

app.get("/movies", (req, res) => {
    const q = "SELECT * FROM movies"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        res.json(data)
    })
})

app.listen(8800, () => {
    console.log("listening")
})