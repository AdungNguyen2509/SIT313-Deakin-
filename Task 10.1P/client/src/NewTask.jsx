import React, { useState } from "react";
import Button from "./Button";
import './NewTask.css';
import TaskDetails from "./TaskDetails";
import TaskSetting from "./TaskSetting";
import Task from './Task';

const NewTask = () => {
    const [checked, setChecked] = useState("inPerson");
    const [data, setData] = useState({
        taskType: '',
        taskTitle: '',
        taskDesc: '',
        suburbInput: '',
        dateInput: ''
    })


    const handleCheck = (event) => {
        const {value,name} = event.target
        setChecked(value)   
        setData( (preValue) => {
            return{
                ...preValue,
                [name]:value
            }
        })      
    }



    const handleClick = () => {
        fetch('http://localhost:4000/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body : JSON.stringify({
                taskType: data.taskType,
                taskTitle: data.taskTitle,
                taskDesc: data.taskDesc,
                suburb: data.suburbInput,
                date: data.dateInput
            })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => {
            console.log("Error:" + err)
        })
    }

    return (
        <div className="newtask-div">
            <h3 className="header">New Task</h3>
            <ul className="task-item">
                <li style={{ fontSize: "17px" }}>Select Task Type: </li>
                <li>
                    <Task
                        type="radio"
                        name="taskType"
                        checked={checked === "inPerson"}
                        value="inPerson"
                        onChange={handleCheck}
                        lable="In person"
                    />
                </li>
                <li>
                    <Task
                        type="radio"
                        checked={checked === "online"}
                        name="taskType"
                        value="online"
                        onChange={handleCheck}
                        lable="Online"
                    />
                </li>
            </ul>


            <h3 className="header">Describe your Task to Experts</h3>
            <TaskDetails
                text="Task Title"
                type="text"
                name="taskTitle"
                value={data.taskTitle}
                onChange={handleCheck}
                placeholder="Enter task title"
                style={{
                    width: "50%",
                    height: "30px",
                    padding: "10px 15px",
                }}
            />
            <TaskDetails
                text="Description"
                type="text"
                name="taskDesc"
                value={data.taskDesc}
                onChange={handleCheck}
                placeholder="Enter task description"
                style={{
                    width: "50%",
                    height: "50px",
                    padding: "10px 15px",
                    margin: "0 0 0 -15px"
                }}
            />

            {/* Conditional rendering with radio button */}
            <h3 className="header">Setting up your Task</h3>
            {checked === "inPerson"
                &&
                <div className="setting-div">
                    <TaskSetting
                        text="Suburb"
                        type="text"
                        name="suburbInput"
                        value={data.suburbInput}
                        onChange={handleCheck}
                        placeholder="Enter a suburb"
                        style={{
                            width: "50%",
                            height: "20px",
                            padding: "10px 15px",
                            margin: "10px 15px"
                        }}
                    />
                    <TaskSetting
                        text="Date"
                        type="date"
                        name="dateInput"
                        value={data.dateInput}
                        onChange={handleCheck}
                        style={{
                            width: "10%",
                            height: "20px",
                            padding: "10px",
                            margin: "10px 30px"
                        }}
                    />
                </div>
            }

            {checked === "online"
                &&
                <div className="setting-div">
                    <TaskSetting
                        text="Date"
                        type="date"
                        name="date-input"
                        value={data.dateInput}
                        onChange={handleCheck}
                        style={{
                            width: "10%",
                            height: "20px",
                            padding: "10px",
                            margin: "10px 30px"
                        }}
                    />
                </div>
            }


            {/* Send data to sever */}
            <Button
                type="submit"
                text="Post a Task"
                onClick={handleClick}
                style={{
                    color: "black",
                    margin: "40px",
                    padding: "10pX 20px",
                    display: "inline-block"
                }}
            />

            <p>{data.taskType}</p>
            <p>{data.taskTitle}</p>

        </div>
    )
}


export default NewTask