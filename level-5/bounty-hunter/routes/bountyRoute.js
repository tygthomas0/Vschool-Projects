const express = require("express")
const bountyRouter = express.Router()
const { v4: uuidv4 } = require("uuid")

const bounties = [
    { firstName: "jabba", lastName: "the hutt", living: true, bounty: 1000, type: "sith", _id: uuidv4() },
    { firstName: "darth", lastName: "vader", living: false, bounty: 3, type: "sith", _id: uuidv4() },
    { firstName: "kaiser heinrich", lastName: "IV", living: true, bounty: 1000000, type: "sith", _id: uuidv4() },
    { firstName: "luke", lastName: "skywalker", living: false, bounty: 3143151, type: "jedi", _id: uuidv4() }
]


bountyRouter.get("/", (req, res) => {
    res.send(bounties)
    })
bountyRouter.post("/", (req, res) => {
    req.body._id = uuidv4()
    bounties.push(req.body)
    res.send(`${req.body.firstname} ${req.body.lastname} successfully added to the database!`)
})
bountyRouter.delete("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    bounties.splice(bountyIndex, 1)
    res.send("Successfully updated bounties")
})
bountyRouter.put("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    const updatedBounties = Object.assign(bounties[bountyIndex], req.body)
    res.send(updatedBounties)
})

module.exports = bountyRouter