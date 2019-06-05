import React from 'react';
import BackgroundImg from './CardBanner';
import CardContent from './CardContent';
import './Card.css';

const CardContainer = () => {
    return (
        <div className="card-container">
           <a href="https://www.reactjs.org">
           <BackgroundImg />
            <CardContent /> 
            </a>
        </div>
    )
}

export default CardContainer;