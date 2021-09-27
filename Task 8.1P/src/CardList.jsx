import React from "react";
import Card from './Card'
import './CardList.css'
import staffList from './staffList'


const CardList = () => {
    return (
        <div className="card-container">
            <ul className="card-item">
                {staffList.map((staff) =>
                    <li key={staff.key}>
                        <Card

                            avatar={staff.avatar}
                            name={staff.name}
                            position={staff.position}
                            rating={staff.rating}
                        />
                    </li>
                )}
            </ul>
        </div>
    )
}

export default CardList