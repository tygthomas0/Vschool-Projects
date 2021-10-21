const express = require('express')
const poemRouter = express.Router()
const Poem = require('../models/poem.js')

poemRouter.get('/', (req, res, next) => {
    Poem.find((err, poems) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(poems)
    })
})

poemRouter.get('/user', (req, res, next) => {
    Poem.find({ user: req.user._id }, (err, poems) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(poems)
    })
})

poemRouter.get('/indvPoem/:poemId', (req, res, next) => {
    Poem.find({ _id: req.params.poemId }, (err, poems) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(poems)
    })
})

poemRouter.put('/indvPoem/:poemId', (req, res, next) => {
    Poem.findOneAndUpdate(
        {_id: req.params.poemId},
        req.body,
        { new: true },
        (err, updatedPoem) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedPoem)
        }
    )
})

poemRouter.post('/', (req, res, next) => {
    req.body.user = req.user._id
    const newPoem = new Poem(req.body)
    newPoem.save((err, savedPoem) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedPoem)
    })
})

poemRouter.delete('/:poemId', (req, res, next) => {
    Poem.findOneAndDelete(
        { _id: req.params.poemId, user: req.user._id },
        (err, deletedPoem) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted poem with id ${req.params.poemId}`)
        }
    )
})

poemRouter.put('/:poemId', (req, res, next) => {
    Poem.findOneAndUpdate(
        { _id: req.params.poemId, user: req.user._id },
        req.body,
        { new: true },
        (err, updatedPoem) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedPoem)
        }
    )
})

module.exports = poemRouter