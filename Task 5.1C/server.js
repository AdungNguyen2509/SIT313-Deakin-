const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const validator = require('validator')
const https = require("https")
const Account = require("./model/Account")
const bcrypt = require('bcrypt')
const saltRounds = 10
const { Router } = require('express')
const { urlencoded } = require('body-parser')
const PORT = process.env.PORT || 5000
//MongoDB atlas Server
mongoose.connect("mongodb+srv://admin-adnguyen:adung2509@cluster0.ro2s9.mongodb.net/iServiceDB?retryWrites=true&w=majority", { useNewUrlParser: true })

const app = express()
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }))

app.route('/')
    .get((req, res) => {
        res.sendFile(__dirname + "/index.html")
    })
    .post((req, res) => {
        const fname = req.body.fname
        const lname = req.body.lname
        const email = req.body.email
        const password = req.body.password
        const cfpassword = req.body.cfpassword
        const address = req.body.address
        const city = req.body.city
        const state = req.body.state
        const num = req.body.num
        const hash = bcrypt.hashSync(password, saltRounds)

        if (!validator.equals(password, cfpassword)) {
            res.status(400).send("Password unmatched")
        }
        else {
            const newAccount = new Account({
                fname: fname,
                lname: lname,
                email: email,
                password: hash,
                cfpassword: hash,
                address: address,
                city: city,
                state: state,
                num: num,
            })
            newAccount
                .save()
                .catch((err) => console.log(err))

            if (res.statusCode === 200) {
                res.sendFile(__dirname + "/login.html")
            }
            else {
                res.send("failed to added to database")
            }

            const data = {
                members: [{
                    email_address: email,
                    status: "subscribed",
                    merge_fields: {
                        FNAME: fname,
                        LNAME: lname
                    }
                }]
            }
            jsonData = JSON.stringify(data)

            const url = "https://us5.api.mailchimp.com/3.0/lists/2ec5a2f345"
            const options = {
                method: "POST",
                auth: "adn:876f7e51bf97af5a98a7376bba571aa2-us5"
            }

            const request = https.request(url, options, (response) => {

                response.on("data", (data) => {
                    console.log(JSON.parse(data))
                })

            })
            request.write(jsonData)
            request.end()
            console.log(fname, lname, email)
        }
    })


app.route('/login')
    .get((req, res) => {
        res.sendFile(__dirname + "/login.html")
    })


    .post((req, res) => {
        const loginEmail = req.body.email
        const loginPassword = req.body.password
        const hash = bcrypt.hashSync(loginPassword, saltRounds);



        //Find email and password in database
        Account.findOne({ email: loginEmail }, function (err, foundEmail) {
            if (err) {
                console.log(err)
            }
            else if (foundEmail === null) {
                res.send("Email or password does not exists")
            }
            else {
                console.log(foundEmail)
                if (bcrypt.compareSync(loginPassword, foundEmail.password))
                {
                    res.send("Logged in")
                }
            }
        })
    })


app.listen(PORT, (req, res) => {
    console.log("server is running on port 5000")
})

