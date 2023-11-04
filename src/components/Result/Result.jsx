import React, { useState } from "react";
import Image from "./../../assets/illustration-thank-you.svg"
import './Result.css';

function Result(props) {
    return (
        <div className="result-main">
                <div className="image"><img src={Image} alt="Illustration" /></div>
                <span>You selected {props.number} out of 5</span>
                <h1>Thank you!</h1>
                <p>We appreciate you taking the time to give a rating. 
                    If you ever need more support, don’t hesitate to get in touch!</p>
        </div>
    )
}

export default Result;