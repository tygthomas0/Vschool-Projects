const mongoose = require('mongoose')
const Schema = mongoose.Schema

const poemSchema = new Schema({
    title: {
        type: String,
        required: true,
        default: 'Untitled'
    },
    description: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    points: {
        type: Number,
        default: 0
    },
    upVoters: {
        type: Array,
        default: []
    },
    downVoters: {
        type: Array,
        default: []
    }
})

module.exports = mongoose.model('Poem', poemSchema)