const express = require("express")
const Expert = require("./model/Expert")
const bodyParser = require("body-parser")
const http = require("http")
const mongoose = require("mongoose")
const ejs = require("ejs")
const app = express()
const PORT = process.env.PORT || 5000

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"))
mongoose.connect("mongodb://localhost:27017/expertDB", { useNewUrlParser: true })


app.route('/')
    .get((req, res) => {
        res.sendFile(__dirname + "/pages/index.html")
    })

    .post((req, res) => {
        const fname = req.body.fname
        const lname = req.body.lname
        const email = req.body.email
        const password = req.body.password
        const address = req.body.address
        const pnum = req.body.pnum
        const expert = new Expert({
            fname: fname,
            lname: lname,
            email: email,
            password: password,
            address: address,
            pnum: pnum,
        })
        expert
            .save()
            .catch((err) => console.log(err))

        if (res.statusCode === 200) {
            res.send("successfully added to database")
        }
        else {
            res.send("failed to added to database")
        }


    })


app.route('/expertID')
    //Show all experts
    .get((req, res) => {
        Expert.find({}, function (err, experts) {
            res.render('result', {
                expertsList: experts
            })
        })
    })
    //Delete all experts
    .delete((req, res) => {
        Task.deleteMany((err) =>{
            if (err) {res.send(err)}
            else {res.send('Successfully deleted all tasks!')}
        })
    })




app.route('/expertID/:id')
    //Update Specific Expert Info
    .patch((req, res) => {
        Expert.update(
            { _id: req.params.id },
            { $set: req.body },
            (err) => {
                if (!err) { res.send('Successfully updated! ') }
                else res.send(err)
            }
        )
    })

    //Retrieving Specific Expert Info
    .get((req,res)=>{
        Expert.findOne(
            {_id: req.params.id},
            (err, foundExpert)=>{
                if (foundExpert) (res.send(foundExpert))
                else res.send("No Matched Task Found!") 
            })
    })

    //Delete Specific Expert Info
    .delete((req,res) =>{
        Expert.deleteOne(
            {_id: req.params.id},
            (err, deleteExpert)=>{
                if (deleteExpert) (res.send("Expert was deleted"))
                else res.send(err) 
            })


        
    })


app.listen(PORT, (req, res) => {
    console.log("Sever is running on port 5000")
})
