import React from 'react';
import './InputBox.css'

const InputBox = (props) => {

    return (
        <div className="setting-div">
            <div className="suburb-div">
                <p>{props.text}</p>
                <input
                    type = {props.type}
                    name={props.name}
                    value={props.value}
                    placeholder={props.placeholder}
                    style ={props.style}
                    onChange={props.onChange}
                />
            </div>
        </div>
    )

}

export default InputBox;