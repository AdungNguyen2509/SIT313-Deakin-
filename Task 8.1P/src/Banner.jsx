import React from "react";
import './Banner.css'


const Banner = () => {
    return(
        <div className="banner">
            <img 
            src = {require('./Images/banner.jpg').default} 
            alt="banner" 
            width= "100%"
            />
        <h1>Feature Experts</h1>
        </div>
    )
}


export default Banner;