const express = require("express")
const app = express()
const { v4: uuidv4 } = require("uuid")

app.use(express.json())
app.use("/items", require("./routes/itemRoute"))

app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})