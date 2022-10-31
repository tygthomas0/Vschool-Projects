const express = require("express")
const scoreRouter = express.Router()
const Score = require('../models/score.js')

// Get All Scores
scoreRouter.get("/", (req, res, next) => {
  Score.find((err, scores) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(scores)
  })
})

// Get Scores by user id
scoreRouter.get("/user", (req, res, next) => {
  Score.find({ user: req.auth._id }, (err, scores) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(scores)
  })
})

// Add new Score
scoreRouter.post("/", (req, res, next) => {
  req.body.user = req.auth._id
  const newScore = new Score(req.body)
  newScore.save((err, savedScore) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedScore)
  })
})

// Delete Score
scoreRouter.delete("/:scoreId", (req, res, next) => {
  Score.findOneAndDelete(
    { _id: req.params.scoreId, user: req.auth._id },
    (err, deletedScore) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(`Successfully delete Score: ${deletedScore.title}`)
    }
  )
})

// Update Score
scoreRouter.put("/:scoreId", (req, res, next) => {
  Score.findOneAndUpdate(
    { _id: req.params.scoreId, user: req.auth._id },
    req.body,
    { new: true },
    (err, updatedScore) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedScore)
    }
  )
})

module.exports = scoreRouter