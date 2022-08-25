import React from 'react';
import { MdHome } from 'react-icons/md';
import './icons.css';

interface IconProps {
    onClick: () => void;
}

const HomeIcon = (props: IconProps) => {
    const { onClick } = props;

    const handleClick = (e: any) => {
        e.preventDefault();
        onClick();
    };

    return <MdHome className="icons" onClick={(e: any) => handleClick(e)} />;
};

export default HomeIcon;
