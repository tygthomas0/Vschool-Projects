const express = require("express")
const app = express()

//(request, response)
app.get("/", (req, res) => {
    res.send({name: "Tyler", age: 20 })
})



app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})