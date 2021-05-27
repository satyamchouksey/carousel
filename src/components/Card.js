import React from 'react'
import "./style.css";
const Card = ({ title, header, content }) => {
    console.log(title)
    return (
        <div className="card">
            <h3 className="cardTitle">{title}</h3>
            <h1 className="cardHeader">{header}</h1>
            <p className="cardContent">{content}</p>
        </div>
    )
}

export default Card
