import React from 'react';

interface LogoProps {
    classname?: string,
    style?: object | undefined
}

const Logo = ({classname,style}:LogoProps) => {
    return (
        <div>
            <img
                width="250px"
                height="170px"
                src="https://upload.wikimedia.org/wikipedia/commons/d/db/Challenge_Logo.png"
                alt="Challenge Me"
                style={style}
                className={`${classname ?? ''}`}
            />
        </div>
    );
};

export default Logo;
