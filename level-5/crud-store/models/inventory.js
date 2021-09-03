const mongoose = require('mongoose')
const Schema = mongoose.Schema

const crudstoreSchema = new Schema({
    productName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stockCount: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Product', crudstoreSchema)