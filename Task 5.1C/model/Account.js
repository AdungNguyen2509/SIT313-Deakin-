const mongoose = require('mongoose')
const validator = require('validator')

const accountSchema = new mongoose.Schema(
    {
        fname: {
            type: String,
            required: true,
        },
        lname: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            index: { unique: true },
            validate: [validator.isEmail, 'invalid email'],
        },
        password: {
            type: String,
            required: true,
            minlength: 8
        },
        cfpassword: {
            type: String,
            required: true,
            minlength: 8
        },
        address: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        zip: Number,
        num: {
            type: Number,
            maxlength: 12
        }
    }
)
module.exports = mongoose.model("Account", accountSchema)
