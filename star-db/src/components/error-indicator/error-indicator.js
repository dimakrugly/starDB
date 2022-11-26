import React from "react";
import './error-indicator.css'
import icon from './death-star.png'
import ReactDOM from "react-dom";

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <img src={icon} alt="error icon"/>
            <span className="boom">BOOM</span>
            <span>
            something went wrong
            </span>
            <span>
            but we sent niggas to fix it
            </span>
        </div>
    )
};

export default ErrorIndicator;