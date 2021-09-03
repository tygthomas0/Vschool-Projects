const express = require("express")
const crudstoreRouter = express.Router()
const Product = require("../models/inventory.js")

crudstoreRouter.get("/", (req, res, next) => {
    Product.find((err, products) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(products)
    })
})

crudstoreRouter.get("/:productID", (req, res, next) => {
    const productID = req.params.productID
    const foundProduct = Product.find(product => product._id === productID)
    if (!foundProduct) {
        const error = new Error(`The product with id ${productID} was not found.`)
        res.status(500)
        return next(error)
    }
    res.status(200).send(foundProduct)
})

crudstoreRouter.post("/", (req, res, next) => {
    const newProduct = new Product(req.body)
    newProduct.save((err, savedProduct) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedProduct)
    })
})

crudstoreRouter.delete("/:productID", (req, res) => {
    Product.findOneAndDelete(
        {_id: req.params.productID},
        (err, deletedItem) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted item with name ${deletedItem.productName} from the database.`)
        }
    )
})

crudstoreRouter.put("/:productID", (req, res, next) => {
    Product.findOneAndUpdate(
        {_id: req.params.productID},
        req.body,
        { new: true },
        (err, updatedProduct) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedProduct)
        }
    )
})

module.exports = crudstoreRouter