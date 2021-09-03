const express = require("express")
const bountyRouter = express.Router()
const Bounty = require("../models/Bounty.js")

bountyRouter.get("/", (req, res, next) => {
    Bounty.find((err, bounties) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounties)
    })
})

bountyRouter.get("/:bountyID", (req, res, next) => {
    const bountyID = req.params.bountyID
    const foundBounty = Bounty.find(bounty => bounty._id === bountyID)
    if (!foundBounty) {
        const error = new Error(`The bounty with id ${bountyID} was not found.`)
        res.status(500)
        return next(error)
    }
    res.status(200).send(foundBounty)
})

bountyRouter.post("/", (req, res, next) => {
    const newBounty = new Bounty(req.body)
    newBounty.save((err, savedBounty) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedBounty)
    })
})

bountyRouter.delete("/:bountyID", (req, res) => {
    Bounty.findOneAndDelete(
        {_id: req.params.bountyID},
        (err) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted item with id ${req.params.bountyID} from the database.`)
        }
    )
})

bountyRouter.put("/:bountyID", (req, res, next) => {
    Bounty.findOneAndUpdate(
        {_id: req.params.bountyID},
        req.body,
        { new: true },
        (err, updatedBounty) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedBounty)
        }
    )
})

module.exports = bountyRouter