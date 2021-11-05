const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    username: {
        type: String
    },
    parent: {
        type: Schema.Types.ObjectId,
        ref: "Poem",
        required: true
    }
})

module.exports = mongoose.model('Comment', commentSchema)