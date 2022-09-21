import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BackIcon, HomeIcon } from '../../icons';
import styles from './Header.module.css';
import { useAppSelector } from '../../../store/hooks';
import Button from '../Button/Button';

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const pathArray = ['/', '/login', '/register'];
    const pathSet = new Set(pathArray);

    const user = useAppSelector(state => state.user);

    const handleClick = (e: any) => {
        e.preventDefault();
        navigate('/');
    };

    return (
        <header>
            <div className={`d-flex justify-content-between align-items-center ${styles.header_nav}`}>
                <div className="d-flex flex-1">
                    <HomeIcon onClick={() => navigate('/')} />
                    {!pathSet.has(location.pathname) && <BackIcon onClick={() => navigate(-1)} />}
                </div>
                <div className="d-flex flex-1 justify-content-center">
                    <h3 className={styles.header_title} onClick={(e) => handleClick(e)}>
                        Challenge Me
                    </h3>
                </div>
                {!user.data ? (
                    <div className="d-flex flex-1 align-items-center justify-content-end">
                        <Button title="Sign In" onClick={() => navigate('/login')} />
                        <Button title="Sign Up" onClick={() => navigate('/register')} />
                    </div>
                ) : (
                    <div className="d-flex flex-1 align-items-center justify-content-end"></div>
                )}
            </div>
        </header>
    );
};

export default Header;
