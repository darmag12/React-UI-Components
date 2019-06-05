import React from 'react';
import { Logo } from './ImageThumbnail';
import Header from './HeaderTitle';
import HeaderContent from './HeaderContent';
import './Header.css';

const HeaderContainer = () => {
    return(
        <div className="header-container">
            <Logo />
            <Header />
            <HeaderContent />
        </div>
    )
}

export  default HeaderContainer;


