import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input, Logo } from '@components/common';
import { AuthLayout, ContentLayout } from '@/layouts';
import { IUserSignInCredendials } from '@/models';
import { register } from '@/services/auth-services/authServices';
import { checkEmptyInputValue, validateEmail } from '@/utils';

const initialUserSignInCredendials = {fullname: '', username: '', email: '', password: ''}

const Register = () => {
    const [formData, setFormData] = useState<IUserSignInCredendials>(initialUserSignInCredendials);
    const [error, setError] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleClick = () => {
        const {fullname, username, email, password } = formData;
        if (checkEmptyInputValue(fullname, username, password) && validateEmail(email)) {
            register(fullname, username, email, password)
                .then(() => navigate('/'))
                .catch(() => {
                    console.log('Bu kullanıcı zaten kayıtlı');
                });
        } else {
            setError(true);
        }
    };

    const handleChangeInput = (e: any) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const { fullname, username, email, password } = formData;

    return (
        <ContentLayout>
            <AuthLayout>
                <Logo />
                <Form autoComplete="off">
                    <Input
                        placeholder="Ad soyad giriniz"
                        type="text"
                        name="fullname"
                        onChange={(e) => handleChangeInput(e)}
                        error={!fullname && error}
                        errorMsg="Ad Soyad zorunlu"
                    />
                    <Input
                        placeholder="Kullanıcı adı giriniz"
                        type="text"
                        name="username"                        
                        onChange={(e) => handleChangeInput(e)}
                        error={!username && error}
                        errorMsg="Kullanıcı zorunlu"
                    />
                    <Input
                        placeholder="Email giriniz"
                        type="email"
                        name="email"
                        onChange={(e) => handleChangeInput(e)}
                        error={!validateEmail(email) && error}
                        errorMsg="Email doğru formatta değil"
                    />
                    <Input
                        placeholder="Password giriniz"
                        type="password"
                        name="password"
                        onChange={(e) => handleChangeInput(e)}
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

export default Register;
