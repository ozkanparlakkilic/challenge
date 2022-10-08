import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BackIcon, HomeIcon } from '@/components/icons';
import styles from './Header.module.scss';
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
            <div className={`${styles.header_nav}`}>
                <div className={`${styles.header_left}`}>
                    <HomeIcon onClick={() => navigate('/')} />
                    {!pathSet.has(location.pathname) && <BackIcon onClick={() => navigate(-1)} />}
                </div>
                <div className={`${styles.header_center}`}>
                    <h3 className={`${styles.header_title}`} onClick={() => navigate('/')}>
                        Challenge Me
                    </h3>
                </div>
                <div className={`${styles.header_right}`}>
                    {!isLoginSuccesful ? (
                        <>
                            <Button title="Sign In" onClick={() => navigate('/login')} />
                            <Button title="Sign Up" onClick={() => navigate('/register')} />
                        </>
                    ) : (
                        <Button title="Logout" onClick={() => logout()} /> 
                    )}
                </div>
            </div>
        </header>
    );
};

export default React.memo(Header);
