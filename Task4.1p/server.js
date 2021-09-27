const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const validator = require('validator')
const  https = require("https")
mongoose.connect("mongodb://localhost:27017/iServiceDB", { useNewUrlParser: true })

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")

})


app.post('/', (req, res) => {
    // const password = req.body.password
    // const cfpassword = req.body.cfpassword
    // if (!validator.equals(password, cfpassword)) {
    //     res.status(400).send("Password unmatched")
    // }
    // else {
    //     const NewAccount = new Account(req.body)
    //     NewAccount.save((err) => {
    //         if (err) { console.log(err) }
    //         else {
    //             res.status(200).send("Inserted successfully")
    //         } 
    //     })
    // }

    const fname = req.body.fname
    const lname = req.body.lname
    const email = req.body.email
    const password = req.body.password
    const cfpassword = req.body.cfpassword
    const address = req.body.address
    const city = req.body.city
    const state = req.body.state
    const num = req.body.num
    if (!validator.equals(password, cfpassword)) {
        res.status(400).send("Password unmatched")
    }
    else {
        const newAccount = new Account({
            fname: fname,
            lname: lname,
            email: email,
            password: password,
            cfpassword: cfpassword,
            address: address,
            city: city,
            state: state,
            num: num,
        })
        newAccount
            .save()
            .catch((err) => console.log(err))

        if (res.statusCode === 200) {
            res.send("successfully added to database")
        }
        else {
            res.send("failed to added to database")
        }

        const data = {
            members:[{
                email_address: email,
                status : "subscribed",
                merge_fields:{
                    FNAME: fname,
                    LNAME:lname
                }
            }]
        }
        jsonData = JSON.stringify(data)
    
        const url = "https://us5.api.mailchimp.com/3.0/lists/2ec5a2f345"
        const options={
            method:"POST",
            auth:"adn:876f7e51bf97af5a98a7376bba571aa2-us5"
        }
    
        const request = https.request(url, options , (response)=>{
    
            response.on("data", (data)=> {
                console.log(JSON.parse(data))
            })
    
        })
    
        request.write(jsonData)
        request.end()
        console.log(fname,lname,email)
    }
})


app.listen(4000, (req, res) => {
    console.log("server is running on port 4000")
})

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

const Account = mongoose.model('Account', accountSchema)


