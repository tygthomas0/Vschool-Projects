const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")



/*
//(request, response)
app.get("/", (req, res) => {
    res.send({name: "Tyler", age: 20 })
})
*/

app.use(/* "/", */ express.json()) //looks for a request body, and turns it into "req.body"
//first argument is optional, if you don't put a pathway at the beginning, it will run the function every time

app.use(morgan("dev"))

//connect to database
mongoose.connect("mongodb://localhost:27017/moviesdb",
    { //this will be for pretty much every server you make
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => console.log("Connected to the database!")
)


//routes
app.use("/movies", require("./routes/movieRouter.js"))
app.use("/tvshows", require("./routes/tvshowRouter.js"))


//error handling
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})