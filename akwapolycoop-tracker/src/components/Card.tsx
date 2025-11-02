import React from 'react';
import './Card.css'; // Assuming you will create a separate CSS file for Card styles

interface CardProps {
    title: string;
    content: string;
    icon?: string; // Optional icon prop
}

const Card: React.FC<CardProps> = ({ title, content, icon }) => {
    return (
        <div className="card">
            {icon && <img src={icon} alt={`${title} icon`} className="card-icon" />}
            <h3 className="card-title">{title}</h3>
            <p className="card-content">{content}</p>
        </div>
    );
};

export default Card;