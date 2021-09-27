const mongoose = require("mongoose")
const validator = require("validator")
const expertSchema = new mongoose.Schema(
    {
        fname:{
            type: String,
            required: true
        },
        lname:{
            type: String,
            required: true
        },
        email:{
            type: String,
            validate(value){
                if (!validator.isEmail(value)){
                throw new Error('Email is not valid!')}
            }
        },
        password:{
            type: String,
            required: true
        },
        address:{
            type: String,
            required: true
        },
        pnum: {
            type: Number,
            minlength: 10,
            maxlength: 12,
            required: true
        },
    }
)

module.exports = mongoose.model("Expert", expertSchema)