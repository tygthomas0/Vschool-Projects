const express = require("express")
const app = express()
const { v4: uuidv4 } = require("uuid")

app.use(express.json())
app.use("/fruit", require("./routes/fruitRoute.js"))


app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})