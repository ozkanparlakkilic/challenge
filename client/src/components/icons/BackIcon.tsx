import React from 'react';
import { MdArrowBack } from 'react-icons/md';
import styles from './icons.module.scss';

interface IconProps {
    onClick: () => void;
}

const BackIcon = (props: IconProps) => {
    const { onClick } = props;

    const handleClick = (e: any) => {
        e.preventDefault();
        onClick();
    };

    return <MdArrowBack className={`${styles.icon}`} onClick={(e: any) => handleClick(e)} />;
};

export default BackIcon;
