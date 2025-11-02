import React from 'react';

interface IconProps {
    name: string;
    size?: number;
    color?: string;
    className?: string;
}

const Icon: React.FC<IconProps> = ({ name, size = 24, color = 'currentColor', className }) => {
    const iconPath = require(`../assets/icons/${name}.svg`).default;

    return (
        <img
            src={iconPath}
            alt={name}
            width={size}
            height={size}
            className={`icon ${className}`}
            style={{ fill: color }}
        />
    );
};

export default Icon;