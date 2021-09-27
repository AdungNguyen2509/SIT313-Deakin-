import React from 'react';
import './CardList.css';
import { FcRating } from "react-icons/fc";

const Card = (props) =>{
    return(
        <div className="card">
            <img 
            src={props.avatar} 
            alt="Avatar"
            border-radius ="4px"
            border= "1px solid #21D4FD"
            />
            <h3>{props.name}</h3>
            <label>Description:</label>
            <p>{props.position}</p>
            <hr/>
            <label>Rating:</label>
            <p>{props.rating} <FcRating/></p>


        </div>
    )
}

export default Card;