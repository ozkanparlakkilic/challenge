import React, { useEffect } from 'react';
import './MainLayout.css';

interface ChildrenProps {
    children: React.ReactNode;
}

const MainLayout = ({ children }: ChildrenProps) => {
    return <div className="flex-1 main-layout">{children}</div>;
};

export default MainLayout;
