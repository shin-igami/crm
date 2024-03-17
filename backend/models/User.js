//User Schema

const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    UserName: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('User', userSchema)