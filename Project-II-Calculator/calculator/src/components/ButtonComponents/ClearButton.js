import React from 'react';
import './Button.css';

export const ClearButton = (props) => {
    return <div className='clear-btn' onClick={props.handleClear}>{props.children}</div>
}