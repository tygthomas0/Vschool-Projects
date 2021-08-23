const express = require("express")
const todoRouter = express.Router()
const { v4: uuidv4 } = require("uuid")

const todos = [
    {
        name: "The name",
        description: "The description of the todo",
        imageUrl: "",
        completed: false,
        _id: uuidv4()
    },
    {
        name: "Todo",
        description: "Another great one",
        imageUrl: "",
        completed: true,
        _id: uuidv4()
    },
    {
        name: "The master of todos",
        description: "Title",
        imageUrl: "",
        completed: false,
        _id: uuidv4()
    },
    {
        name: "Nothing",
        description: "A well-earned break",
        imageUrl: "",
        completed: true,
        _id: uuidv4()
    }
]

todoRouter.get("/", (req, res) => {
    res.send(todos)
})
todoRouter.get("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const foundTodo = todos.find(todo => todo._id === todoId)
    res.send(foundTodo)
})

todoRouter.post("/", (req, res) => {
    req.body._id = uuidv4()
    todos.push(req.body)
    res.send(todos)
})

todoRouter.delete("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    todos.splice(todoIndex, 1)
    res.send("Successfully deleted todo")
})

todoRouter.put("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    const updatedTodo = Object.assign(todos[todoIndex], req.body)
    res.send(updatedTodo)
})


module.exports = todoRouter