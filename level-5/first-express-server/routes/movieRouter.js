const express = require("express")
const movieRouter = express.Router()
const { v4: uuidv4 } = require("uuid")

const movies = [
    { title: "die hard", genre: "action", _id: uuidv4() },
    { title: "star wars", genre: "fantasy", _id: uuidv4() },
    { title: "lion king", genre: "fantasy", _id: uuidv4() },
    { title: "friday the 13th", genre: "horror", _id: uuidv4() }
]


//don't need to put the endpoint because it is already implied, since you tell it to look in the "movies" file
movieRouter.get("/", (req, res) => {
    res.send(movies)
})

movieRouter.post("/", (req, res) => {
    req.body._id = uuid()
    movies.push(req.body)
    res.send(`Successfully added ${req.body.title} to database!`)
})




module.exports = movieRouter