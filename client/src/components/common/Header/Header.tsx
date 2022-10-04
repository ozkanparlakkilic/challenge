import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BackIcon, HomeIcon } from '@/components/icons';
import styles from './Header.module.css';
import { useAuth } from '@/hooks/useAuth';
import { useLogout } from '@/hooks/useLogout';
import { Button } from '@components/common';

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const pathArray = ['/', '/login', '/register'];
    const pathSet = new Set(pathArray);

    const { loggedUser: { isSuccess: isLoginSuccesful } } = useAuth()
    const { logout: handleLogout } = useLogout();

    const logout = () => {
        handleLogout();
    }

    return (
        <header>
            <div className={`d-flex justify-content-between align-items-center ${styles.header_nav}`}>
                <div className="d-flex flex-1">
                    <HomeIcon onClick={() => navigate('/')} />
                    {!pathSet.has(location.pathname) && <BackIcon onClick={() => navigate(-1)} />}
                </div>
                <div className="d-flex flex-1 justify-content-center">
                    <h3 className={styles.header_title} onClick={() => navigate('/')}>
                        Challenge Me
                    </h3>
                </div>
                {!isLoginSuccesful ? (
                    <div className="d-flex flex-1 align-items-center justify-content-end">
                        <Button title="Sign In" onClick={() => navigate('/login')} />
                        <Button title="Sign Up" onClick={() => navigate('/register')} />
                    </div>
                ) : (
                    <div className="d-flex flex-1 align-items-center justify-content-end">
                       <Button title="Logout" onClick={() => logout()} /> 
                    </div>
                )}
            </div>
        </header>
    );
};

export default React.memo(Header);
