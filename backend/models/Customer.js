const mongoose = require('mongoose')
const { Schema } = mongoose

const customerSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    Number : {
        type: Number,
        required: true
    },
    Details: {
        type: String,
        required: true
    },
    Progress : {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Customer', customerSchema)