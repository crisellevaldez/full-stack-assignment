const mongoose = require('mongoose')
const Schema = mongoose.Schema

const logSchema = new Schema({
    type: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Log', logSchema)