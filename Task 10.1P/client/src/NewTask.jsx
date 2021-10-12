import React, { useState } from "react";
import Button from "./Button";
import './NewTask.css';
import Checkbox from "./Checkbox";
import InputBox from "./InputBox";

const NewTask = () => {
    const [checkedOne, setCheckedOne] = useState(false);
    const [checkedTwo, setCheckedTwo] = useState(false);

    const [state, setState] = useState({
        hooks: true
    })


    const handleChange = (evt) => {
        const value = evt.target.value
        const name = evt.target.name
        data.budget = name
        setState({
            ...state,
            [evt.target.name]: value
        });
    }
    const [data, setData] = useState({
        taskType: '',
        taskTitle: '',
        taskDesc: '',
        suburbInput: '',
        dateInput: '',
        budget: '',
        budgetAmount: ''
    })

    const handleChangeOne = (event) => {
        const name = event.target.name
        data.taskType = name
        setCheckedOne(!checkedOne)
    }

    const handleChangeTwo = (event) => {
        const name = event.target.name
        data.taskType = name
        setCheckedTwo(!checkedTwo)
    }


    const handleInput = (event) => {
        const { value, name } = event.target
        setData((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
        })
    }


    const handleClick = () => {
        fetch('http://localhost:4000/register', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                taskType: data.taskType,
                taskTitle: data.taskTitle,
                taskDesc: data.taskDesc,
                suburb: data.suburbInput,
                date: data.dateInput,
                budget: data.budget,
                budgetAmount: data.budgetAmount
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
                <li style={{ fontSize: "17px" }}>Select Task Type</li>
                <li>
                    <Checkbox
                        type="checkbox"
                        name="InPerson"
                        value={checkedOne}
                        onChange={handleChangeOne}
                        lable="In person"
                    />
                </li>
                <li>
                    <Checkbox
                        type="checkbox"
                        name="Online"
                        value={checkedTwo}
                        onChange={handleChangeTwo}
                        lable="Online"
                    />
                </li>
            </ul>


            <h3 className="header">Describe your Task to Experts</h3>
            <InputBox
                text="Task Title"
                type="text"
                name="taskTitle"
                value={data.taskTitle}
                onChange={handleInput}
                placeholder="Enter task title"
                style={{
                    width: "50%",
                    height: "30px",
                    padding: "10px 15px",
                }}
            />
            <InputBox
                text="Description"
                type="text"
                name="taskDesc"
                value={data.taskDesc}
                onChange={handleInput}
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
            {checkedOne ?
                <InputBox
                    text="Suburb"
                    type="text"
                    name="suburbInput"
                    value={data.suburbInput}
                    onChange={handleInput}
                    placeholder="Enter a suburb"
                    style={{
                        width: "50%",
                        height: "20px",
                        padding: "10px 15px",
                        margin: "10px 15px"
                    }}
                /> : null
            }
            <InputBox
                text="Date"
                type="date"
                name="dateInput"
                value={data.dateInput}
                onChange={handleInput}
                style={{
                    width: "10%",
                    height: "20px",
                    padding: "10px",
                    margin: "10px 30px"
                }}
            />


            <h3 className="header">Suggest how much</h3>
            <ul className="task-item">
                <li style={{ fontSize: "17px" }}>Payment Type</li>

                <li>
                    <Checkbox
                        type="checkbox"
                        name="totalPrice"
                        value={state.hooks}
                        onChange={handleChange}
                        lable="Total"
                    />
                </li>
                <li>
                    <Checkbox
                        type="checkbox"
                        name="hourlyPrice"
                        value={state.hooks}
                        onChange={handleChange}
                        lable="Hourly rate"

                    />
                </li>
            </ul>
            <InputBox
                    text="Amount"
                    type="text"
                    name="budgetAmount"
                    value={data.budgetAmount}
                    onChange={handleInput}
                    placeholder="Enter an amount"
                    style={{
                        width: "12%",
                        height: "20px",
                        padding: "10px 15px",
                        margin: "10px 15px"
                    }}
                />
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

        </div>
    )
}


export default NewTask