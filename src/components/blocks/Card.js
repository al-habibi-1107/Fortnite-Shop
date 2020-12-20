import React from "react";

import "./Card.css";

function Card(prop){

    return(
        <div className="container">
            <img className='prop-img' src={prop.img} alt="img"/>
            <h1 className='prop-title'>{prop.title}</h1>
            <p className='prop-desc'>{prop.desc}</p>
            <button className='prop-btn'>Get Now</button>
        </div>
    );
}

export default Card;