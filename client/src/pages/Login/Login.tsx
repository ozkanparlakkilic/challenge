import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input, Logo } from '@/components/common';
import { useAuth } from '@/hooks/useAuth';
import { AuthLayout, ContentLayout } from '@/layouts';
import { IUserLoginCredendials } from '@/models';
import { useAppDispatch } from '@/store/hooks';
import { login } from '@/store/slices/auth/authSlice';
import { checkEmptyInputValue } from '@/utils';

const initialUserLoginCredentials = {username: '', password: ''}

const Login = () => {
    const [formData, setFormData] = useState<IUserLoginCredendials>(initialUserLoginCredentials);
    const [error, setError] = useState<boolean>(false);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const { loggedUser: { isSuccess: isLoginSuccesful } } = useAuth();

    const handleClick = () => {
        const { username, password } = formData;
        if (checkEmptyInputValue(username,password)) {
            dispatch(login({ username, password }))
        } else {
            setError(true);
        }
    };

    const handleChangeInput = (e: any) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    useEffect(() => {
        if (isLoginSuccesful) {
            navigate('/');
        }
    }, [isLoginSuccesful, navigate]);

    return (
        <ContentLayout>
            <AuthLayout>
                <Logo />
                <Form autoComplete="off">
                    <Input
                        placeholder="Kullanıcı adı giriniz"
                        type="text"
                        name="username"
                        onChange={(e) => handleChangeInput(e)}
                        error={!formData.username && error}
                        errorMsg="Kullanıcı zorunlu"
                    />
                    <Input
                        placeholder="Password giriniz"
                        type="password"
                        name="password"
                        onChange={(e) => handleChangeInput(e)}
                        error={!formData.password && error}
                        errorMsg="Password zorunlu"
                    />
                    <Button
                        classname="align-self-center"
                        title="Sign In"
                        style={{ width: '50%', margin: '20px' }}
                        onClick={() => handleClick()}
                    />
                </Form>
            </AuthLayout>
        </ContentLayout>
    );
};

export default Login;
