const express = require("express")
const itemRouter = express.Router()
const { v4: uuidv4 } = require("uuid")

itemRouter.use("/", (req, res, next) => {
    console.log("Items middleware was executed")
    next()
})

itemRouter.use("/", (req, res, next) => {
    req.body = { name: "Tyler" }
    next()
})

itemRouter.get("/", (req, res, next) => {
    console.log("Get request received")
    res.send(req.body)
})




module.exports = itemRouter