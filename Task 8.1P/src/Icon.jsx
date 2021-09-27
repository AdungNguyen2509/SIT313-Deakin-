import React from 'react';
import {SocialMediaIconsReact} from 'social-media-icons-react';


const Icon = (props) => {
    return (
        <SocialMediaIconsReact
            borderColor = {props.borderColor}
            borderWidth = {props.borderWidth}
            borderStyle ={props.borderStyle}
            icon = {props.icon}
            iconColor = {props.iconColor}
            backgroundColor = {props.backgroundColor}
            iconSize = {props.iconSize}
            roundness = {props.roundness}
            url = {props.url}
            size = {props.size}
        />
    )
}

export default Icon;