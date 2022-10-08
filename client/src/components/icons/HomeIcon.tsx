import React from 'react';
import { MdHome } from 'react-icons/md';
import styles from './icons.module.scss';

interface IconProps {
    onClick: () => void;
}

const HomeIcon = (props: IconProps) => {
    const { onClick } = props;

    const handleClick = (e: any) => {
        e.preventDefault();
        onClick();
    };

    return <MdHome className={`${styles.icon}`} onClick={(e: any) => handleClick(e)} />;
};

export default HomeIcon;
