import React from 'react';
import styles from './MainLayout.module.css';

interface ChildrenProps {
    children: React.ReactNode;
}

const MainLayout = ({ children }: ChildrenProps) => {
    return <div className={`flex-1 ${styles.main_layout}`}>{children}</div>;
};

export default MainLayout;
