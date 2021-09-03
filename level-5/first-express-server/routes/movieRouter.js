const express = require("express")
const movieRouter = express.Router()
const Movie = require("../models/movie.js")


//don't need to put the endpoint because it is already implied, since you tell it to look in the "movies" file
movieRouter.get("/", (req, res, next) => {
    Movie.find((err, movies) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(movies)
    })
})

// movieRouter.get("/:movieId", (req, res, next) => {
//     const movieId = req.params.movieId
//     const foundMovie = movies.find(movie => movie._id === movieId)
//     if (!foundMovie) { //"truthy" value
//         const error = new Error(`The movie with id ${movieId} was not found`)
//         res.status(500)
//         return next(error)
//     }
//     res.status(200).send(foundMovie) //can chain them together since they're both res methods
// })

// movieRouter.get("/search/genre", (req, res, next) => {
//     const genre = req.query.genre
//     if (!genre) {
//         const error = new Error("You must provide a genre.")
//         res.status(500)
//         return next(error)
//     }
//     const filteredMovies = movies.filter(movie => movie.genre === genre)
//     res.status(200).send(filteredMovies)
// })

movieRouter.post("/", (req, res, next) => {
    const newMovie = new Movie(req.body)
    newMovie.save((err, savedMovie) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedMovie)
    })
})

movieRouter.delete("/:movieId", (req, res) => {
    Movie.findOneAndDelete(
        {_id: req.params.movieId}, //object tells the database what to filter by/look for
        (err, deletedItem) => { 
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted item ${deletedItem.title} from the database`)
        }
    )
})

movieRouter.put("/:movieId", (req, res, next) => {
    Movie.findOneAndUpdate(
        {_id: req.params.movieId}, //find this one to update
        req.body, //update the object with this data
        { new: true }, //send back the updated version please
        (err, updatedMovie) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedMovie)
        }
    )
})



module.exports = movieRouter