import React from 'react';
import './Card.css';
import ReactBackground from './Img/reactbackground.png';


const BackgroundImg = () => {
    return (
        <div>
            <img id="react-background-img"src={ReactBackground} alt=""/>
        </div>
    )
}

export default BackgroundImg;