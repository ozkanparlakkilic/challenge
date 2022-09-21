import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input, Logo } from '../../components/common';
import { AuthLayout, ContentLayout } from '../../layouts';
import { useAppDispatch } from '../../store/hooks';
import { userLogin } from '../../store/slices/userSlice';
import { checkEmptyInputValue } from '../../utils';

const Login = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<boolean>(false);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleClick = () => {
        if (checkEmptyInputValue(password)) {
            dispatch(userLogin({ username, password }))
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
            <AuthLayout>
                <Logo />
                <Form autoComplete="off">
                    <Input
                        placeholder="Kullanıcı adı giriniz"
                        type="text"
                        onChange={(e) => setUsername(e)}
                        error={!username && error}
                        errorMsg="Kullanıcı zorunlu"
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
                        title="Sign Up"
                        style={{ width: '50%', margin: '20px' }}
                        onClick={() => handleClick()}
                    />
                </Form>
            </AuthLayout>
        </ContentLayout>
    );
};

export default Login;
