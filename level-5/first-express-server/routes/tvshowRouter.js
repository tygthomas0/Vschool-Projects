const express = require("express")
const tvshowRouter = express.Router()
const { v4: uuidv4 } = require("uuid")

const tvshows = [
    { title: "rick and morty", _id: uuidv4() },
    { title: "watchmen", _id: uuidv4() },
    { title: "westworld", _id: uuidv4() },
    { title: "friends", _id: uuidv4() }
]

// The original way
tvshowRouter.get("/", (req, res) => {
    res.send(tvshows)
})
//with a parameter (id)
tvshowRouter.get("/:tvshowId", (req, res) => {
    const tvshowId = req.params.tvshowId
    const foundShow = tvshows.find(tvshow => tvshow._id === tvshowId)
    res.send(foundShow)
})
//now with this, you can put an ID at the endpoint and if it exists in the database, it will return only that

//with queries (get by genre)
tvshowRouter.get("/search/genre", (req, res) => {
    const genre = req.query.genre
    const filteredShows = tvshows.filter(tvshow => tvshow.genre === genre)
    res.send(filteredShows)
})

// original way
tvshowRouter.post("/", (req, res) => {
    req.body._id = uuid()
    tvshows.push(req.body)
    res.send(`Successfully added ${req.body.title} to database!`)
})

/*
//another way
tvshowRouter.route("/")
    .get((req, res) => { //since the route has the endpoint, don't have to put them in the actual request anymore
        res.send(tvshows)
    })
    .post((req, res) => {
        req.body._id = uuid()
        tvshows.push(req.body)
        res.send(`Successfully added ${req.body.title} to database!`)
    })
*/

module.exports = tvshowRouter