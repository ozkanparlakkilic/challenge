import React from 'react';
import { MdArrowBack } from 'react-icons/md';
import './icons.css';

interface IconProps {
    onClick: () => void;
}

const BackIcon = (props: IconProps) => {
    const { onClick } = props;

    const handleClick = (e: any) => {
        e.preventDefault();
        onClick();
    };

    return <MdArrowBack className="icons" onClick={(e: any) => handleClick(e)} />;
};

export default BackIcon;
