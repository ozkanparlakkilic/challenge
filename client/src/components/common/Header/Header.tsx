import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IUser } from '../../../@types';
import { loadStorage } from '../../../utils/loadStorage';
import BackIcon from '../../icons/BackIcon';
import HomeIcon from '../../icons/HomeIcon';
import Button from '../Button/Button';
import './Header.css';

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const pathArray = ['/', '/login', '/register'];
    const pathSet = new Set(pathArray);

    const user = loadStorage<IUser>('user');

    const handleClick = (e: any) => {
        e.preventDefault();
        navigate('/');
    };

    return (
        <header>
            <div className="d-flex justify-content-between align-items-center header-nav">
                <div className="d-flex flex-1">
                    <HomeIcon onClick={() => navigate('/')} />
                    {!pathSet.has(location.pathname) && <BackIcon onClick={() => navigate(-1)} />}
                </div>
                <div className="d-flex flex-1 justify-content-center">
                    <h3 className="header-title" onClick={(e) => handleClick(e)}>
                        Challenge Me
                    </h3>
                </div>
                {!user ? (
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
