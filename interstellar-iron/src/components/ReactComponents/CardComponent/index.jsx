import React from "react";
import './index.css';

export const CardComponent = ({ title, text }) => {

    return (
        <div className="card-component">
            <h3>{title}</h3>
            <div className="card-component--text">{text}</div>
            <button>Read more</button>
        </div>
    );
}

export default CardComponent;