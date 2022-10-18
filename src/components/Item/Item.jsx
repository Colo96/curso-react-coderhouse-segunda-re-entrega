import './Item.css';
import React from 'react';

export const Item = ({info}) => {
    return(
        <a href='/' className="film">
            <img src={info.image} alt=""/>
            <p>
                {info.title}
            </p>
        </a>
    );
}