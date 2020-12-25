import React from "react";
import {Link} from 'react-router-dom'

import "./Card.css";
import {bgStyle} from '../Home';



function Card(prop){

    

    return(
        <div className="container"  style={bgStyle} >
            <img className='prop-img' src={prop.img} alt="img"/>
            <h1 className='prop-title'>{prop.title}</h1>
            <p className='prop-desc'>{prop.desc}</p>
            <Link className='prop-btn' to={`/shop/${prop.id}`}>Get Now</Link>
        </div>
    );
}

export default Card;


