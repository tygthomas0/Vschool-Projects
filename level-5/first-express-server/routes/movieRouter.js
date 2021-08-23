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

movieRouter.get("/:movieId", (req, res) => {
    const movieId = req.params.movieId
    const foundMovie = movies.find(movie => movie._id === movieId)
    res.send(foundMovie)
})

movieRouter.get("/search/genre", (req, res) => {
    const genre = req.query.genre
    const filteredMovies = movies.filter(movie => movie.genre === genre)
    res.send(filteredMovies)
})

movieRouter.post("/", (req, res) => {
    req.body._id = uuid()
    movies.push(req.body)
    res.send(`Successfully added ${req.body.title} to database!`)
})

movieRouter.delete("/:movieId", (req, res) => {
    const movieId = req.params.movieId
    const movieIndex = movies.findIndex(movie => movie._id === movieId)
    movies.splice(movieIndex, 1)
    res.send("Successfully deleted movie")
})

movieRouter.put("/:movieId", (req, res) => {
    const movieId = req.params.movieId
    const movieIndex = movies.findIndex(movie => movie._id === movieId)
    const updatedMovie = Object.assign(movies[movieIndex], req.body)
    res.send(updatedMovie)
})



module.exports = movieRouter