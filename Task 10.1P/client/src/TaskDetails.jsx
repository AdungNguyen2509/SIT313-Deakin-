import React from "react";
import "./TaskDetails.css"

const TaskDetails = (props) => {

    return (
        <div className="detail-div">
            <div className='task-title'>
                <p>{props.text}</p>
                <input
                    type={props.type}
                    name={props.name}
                    placeholder={props.placeholder}
                    style={props.style}
                    value={props.value}
                    onChange= {props.onChange}
                    />
            </div>
        </div>      
    )
}


export default TaskDetails;