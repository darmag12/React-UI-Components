import React from 'react';
import BackgroundImg from './CardBanner';
import CardContent from './CardContent';
import './Card.css';

const CardContainer = () => {
    return (
        <div>
            <BackgroundImg />
            <CardContainer />
        </div>
    )
}

export default CardContainer;