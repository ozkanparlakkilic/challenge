import React from 'react';
import './ContentLayout.css';

interface ChildrenProps {
    children: React.ReactNode;
    classname?: string | '';
}

const ContentLayout = ({ children, classname }: ChildrenProps) => {
    return (
        <div
            className={`${
                classname ? classname : ''
            } d-flex flex-direction-column justify-content-center align-items-center h-100 content-layout`}
        >
            {children}
        </div>
    );
};

export default ContentLayout;