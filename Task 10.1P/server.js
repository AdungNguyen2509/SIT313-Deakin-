const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const validator = require("validator");
const Task = require("./models/Task");
const cors = require("cors");


const app = express();



app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors())
app.use(bodyParser.json())


mongoose.connect("mongodb://localhost:27017/TaskDB", {useNewUrlParser: true, useUnifiedTopology: true})


app.get('/', (req,res) =>{
    const task = {
        taskType: "online",
        taskTitle: "Building Website",
        taskDesc: "Build a good website",
        suburb: "burwood",
        date: "09/10/2021"
    }
    res.send(task)

})

app.post('/register', (req,res)=>{

    const task = new Task({
        taskType : req.body.taskType,
        taskTitle : req.body.taskTitle,
        taskDesc : req.body.taskDesc,
        suburb : req.body.suburbInput,
        date: req.body.dateInput
    });
    task.save()
    .catch((err) => console.log(err));
    res.json(('save to db: ' + task));
    console.log(req.body)
})


let port = process.env.PORT;
if (port == null || port == "") {
  port = 4000;
}

app.listen(port, (req,res)=>{
    console.log("Server is running successfullly!")
})
