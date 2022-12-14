import React from 'react';
import styles from './ContentLayout.module.scss';

interface ChildrenProps {
    children: React.ReactNode;
    classname?: string | '';
}

const ContentLayout = ({ children, classname }: ChildrenProps) => {
    return (
        <div
            className={`${
                classname ? classname : ''
            } ${styles.content_layout}`}
        >
            {children}
        </div>
    );
};

export default React.memo(ContentLayout);
