const express = require("express")
const fruitRouter = express.Router()
const { v4: uuidv4 } = require("uuid")

const fruits = [
    { name: "Granny Smith", type: "apple", price: 0.5, _id: uuidv4() },
    { name: "Long and yellow", type: "banana", price: 1, _id: uuidv4() },
    { name: "Red Delicious", type: "apple", price: 0, _id: uuidv4() },
    { name: "Round and Brown", type: "kiwi", price: 70, _id: uuidv4() }
]

fruitRouter.get("/", (req, res) => {
    res.send(fruits)
})

fruitRouter.get("/:fruitId", (req, res) => {
    const fruitId = req.params.fruitId
    const foundFruit = fruits.find(fruit => fruit._id === fruitId)
    res.send(foundFruit)
})

fruitRouter.get("/search/type", (req, res) => {
    const type = req.query.type
    const filteredFruit = fruits.filter(fruit => fruit.type === type)
    res.send(filteredFruit)
})

/*
fruitRouter.get("/search/minPrice&maxPrice", (req, res) => {
    console.log(req.query)
    const minPrice = req.query.minPrice
    const maxPrice = req.query.maxPrice
    const filteredFruit = fruits.filter(fruit => fruit.price <= maxPrice && fruit.price >= minPrice)
    res.send(filteredFruit)
})
*/


module.exports = fruitRouter