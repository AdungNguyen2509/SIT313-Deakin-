import React, { useState } from 'react';
import './Price.css'

const Price = () => {
    const [checked, setChecked] = useState("total")

    return (
        <div className="price-div">
            <h3 className="header">Suggest how much</h3>

            <div className="content-wrapper">
                <p>What is your budget (estimate)</p>
                <ul className="price-option">
                    <li>
                        <input
                            type="radio"
                            checked={checked === "total"}
                            name="total" 
                            value="total"
                            onChange={(e) => {
                                setChecked(e.target.value)
                            }}
                        />
                        <label>Total</label>
                    </li>
                    <li>
                        <input
                            type="radio"
                            checked={checked === "hourly"}
                            name="hourly" 
                            value="hourly"
                            onChange={(e) => {
                                setChecked(e.target.value)
                            }}
                        />
                        <label>Hourly Rate</label>
                    </li>
                </ul>
                <input
                    type="text"
                    placeholder="$"
                    style={{
                        width: "10%",
                        height: "20px",
                    }}
                />



            </div>
        </div>

    )
}


export default Price;