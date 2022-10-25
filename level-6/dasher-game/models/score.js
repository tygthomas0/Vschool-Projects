const mongoose = require('mongoose')
const Schema = mongoose.Schema

const scoreSchema = new Schema({
  score: {
    type: Number,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
})

module.exports = mongoose.model("Score", scoreSchema)