import React, { useEffect } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { setUserData } from '../../store/slices/userSlice';
import styles from './MainLayout.module.css';

interface ChildrenProps {
    children: React.ReactNode;
}

const MainLayout = ({ children }: ChildrenProps) => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setUserData())
    },[dispatch])

    return <div className={`flex-1 ${styles.main_layout}`}>{children}</div>;
};

export default MainLayout;
