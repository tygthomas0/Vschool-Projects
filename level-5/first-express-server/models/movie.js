const mongoose = require("mongoose")
const Schema = mongoose.Schema

//movie blueprint
const movieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    //if you didn't want to configure it you could do just:
    // title: String,
    genre: {
        type: String,
        required: true
    },
    releaseYear: Number
})


module.exports = mongoose.model("Movie", movieSchema)