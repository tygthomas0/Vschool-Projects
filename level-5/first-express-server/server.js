const express = require("express")
const app = express()
const { v4 } = require("uuid")


/*
//(request, response)
app.get("/", (req, res) => {
    res.send({name: "Tyler", age: 20 })
})
*/

app.use(/* "/", */ express.json()) //looks for a request body, and turns it into "req.body"
//first argument is optional, if you don't put a pathway at the beginning, it will run the function every time


//routes
app.use("/movies", require("./routes/movieRouter.js"))
app.use("/tvshows", require("./routes/tvshowRouter.js"))




app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})