const express = require("express")
const app = express()
const uuid = require("uuid/v4")


/*
//(request, response)
app.get("/", (req, res) => {
    res.send({name: "Tyler", age: 20 })
})
*/

app.use(/* "/", */ express.json()) //looks for a request body, and turns it into "req.body"
//first argument is optional, if you don't put a pathway at the beginning, it will run the function every time

//can also set up "your own data":

const movies = [
    { title: "die hard", genre: "action", _id: uuid() },
    { title: "star wars", genre: "fantasy", _id: uuid() },
    { title: "lion king", genre: "fantasy", _id: uuid() },
    { title: "friday the 13th", genre: "horror", _id: uuid() }
]

app.get("/movies", (req, res) => {
    res.send(movies)
})

app.post("/movies", (req, res) => {
    req.body._id = uuid()
    movies.push(req.body)
    res.send(`Successfully added ${req.body.title} to database!`)
})


app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})