import React from 'react';
import './Button.css'; // Assuming you will create a Button.css for styling

interface ButtonProps {
    label: string;
    onClick: () => void;
    icon?: string; // Optional icon prop
    variant?: 'primary' | 'secondary'; // Button variants
}

const Button: React.FC<ButtonProps> = ({ label, onClick, icon, variant = 'primary' }) => {
    return (
        <button className={`button ${variant}`} onClick={onClick}>
            {icon && <img src={icon} alt="" className="button-icon" />}
            {label}
        </button>
    );
};

export default Button;