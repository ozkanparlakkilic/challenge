import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input } from '../../components/common';
import { ContentLayout } from '../../layouts';
import { login } from '../../services/userServices/userServices';
import { checkEmptyInputValue } from '../../utils';
import styles from './Login.module.css';

const Login = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleClick = () => {
        if (checkEmptyInputValue(password)) {
            login(username, password)
                .then((user) => {
                    localStorage.setItem('user', JSON.stringify(user));
                    navigate('/');
                })
                .catch(() => {
                    console.log('Kullanıcı adı veya şifre yanlış');
                });
        } else {
            setError(true);
        }
    };

    return (
        <ContentLayout>
            <div className={`d-flex flex-direction-column ${styles.login_wrapper}`}>
                <div>
                    <img
                        className={styles.logo}
                        src="https://upload.wikimedia.org/wikipedia/commons/d/db/Challenge_Logo.png"
                        alt="Challenge Me"
                    />
                </div>
                <div className="d-flex flex-1 align-items-center">
                    <form className="w-100" autoComplete="off">
                        <Input
                            placeholder="Kullanıcı adı giriniz"
                            type="email"
                            onChange={(e) => setUsername(e)}
                            error={!username && error}
                            errorMsg="Kullanıcı adı zorunlu"
                        />
                        <Input
                            placeholder="Password giriniz"
                            type="password"
                            onChange={(e) => setPassword(e)}
                            error={!password && error}
                            errorMsg="Password zorunlu"
                        />
                        <Button
                            classname="align-self-center"
                            title="Sign In"
                            style={{ width: '50%', margin: '20px' }}
                            onClick={() => handleClick()}
                        />
                    </form>
                </div>
            </div>
        </ContentLayout>
    );
};

export default Login;
