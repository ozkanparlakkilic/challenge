import React from 'react';
import styles from './MainLayout.module.scss';

interface ChildrenProps {
    children: React.ReactNode;
}

const MainLayout = ({ children }: ChildrenProps) => {
    return <div className={`${styles.main_layout}`}>{children}</div>;
};

export default MainLayout;
