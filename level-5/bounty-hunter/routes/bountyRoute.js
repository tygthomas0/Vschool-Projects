const express = require("express")
const bountyRouter = express.Router()
const { v4: uuidv4 } = require("uuid")

const bounties = [
    { firstName: "jabba", lastName: "the hutt", living: true, bounty: 1000, type: "sith", _id: uuidv4() },
    { firstName: "darth", lastName: "vader", living: false, bounty: 3, type: "sith", _id: uuidv4() },
    { firstName: "kaiser heinrich", lastName: "IV", living: true, bounty: 1000000, type: "sith", _id: uuidv4() },
    { firstName: "luke", lastName: "skywalker", living: false, bounty: 3143151, type: "jedi", _id: uuidv4() }
]


bountyRouter.route("/")
    .get((req, res) => {
        res.send(bounties)
    })
    .post((req, res) => {
        req.body._id = uuidv4()
        bounties.push(req.body)
        res.send(`${req.body.firstname} ${req.body.lastname} successfully added to the database!`)
    })

module.exports = bountyRouter