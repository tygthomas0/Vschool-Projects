const express = require("express")
const tvshowRouter = express.Router()
const { v4: uuidv4 } = require("uuid")

const tvshows = [
    { title: "rick and morty", _id: uuidv4() },
    { title: "watchmen", _id: uuidv4() },
    { title: "westworld", _id: uuidv4() },
    { title: "friends", _id: uuidv4() }
]

/* The original way
tvshowRouter.get("/", (req, res) => {
    res.send(tvshows)
})

tvshowRouter.post("/", (req, res) => {
    req.body._id = uuid()
    movies.push(req.body)
    res.send(`Successfully added ${req.body.title} to database!`)
})
*/

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


module.exports = tvshowRouter