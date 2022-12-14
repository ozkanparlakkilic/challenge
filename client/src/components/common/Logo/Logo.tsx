import React from 'react';
import styles from './Logo.module.scss';

interface LogoProps {
    classname?: string | undefined,
    style?: object | undefined
    width?: string | undefined,
    height?: string | undefined

}

const Logo = ({classname,style,width,height}:LogoProps) => {
    return (
        <div>
            <img
                width={`${width ?? '250px'}`}
                height={`${height ?? '170px'}`}
                src="https://upload.wikimedia.org/wikipedia/commons/d/db/Challenge_Logo.png"
                alt="Challenge Me"
                style={style}
                className={`${classname ?? ''} ${styles.logo}`}
            />
        </div>
    );
};

export default Logo;
