import React from 'react';
import './ScrollContainer.scss';

interface ScrollContainerProps {
    children: React.ReactNode;
    classname?: string;
}

const ScrollContainer = ({ children, classname }: ScrollContainerProps) => {
    return <div className={`${classname ? classname : ''} scroll`}>{children}</div>;
};

export default ScrollContainer;
