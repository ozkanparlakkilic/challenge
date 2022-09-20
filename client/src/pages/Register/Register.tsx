import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input, Logo } from '../../components/common';
import { AuthLayout, ContentLayout } from '../../layouts';
import { register } from '../../services/userServices/userServices';
import { checkEmptyInputValue, validateEmail } from '../../utils';

const Register = () => {
    const [fullname, setFullname] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleClick = () => {
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

    return (
        <ContentLayout>
            <AuthLayout>
                <Logo />
                <Form autoComplete="off">
                    <Input
                        placeholder="Ad soyad giriniz"
                        type="text"
                        onChange={(e) => setFullname(e)}
                        error={!fullname && error}
                        errorMsg="Ad Soyad zorunlu"
                    />
                    <Input
                        placeholder="Kullanıcı adı giriniz"
                        type="text"
                        onChange={(e) => setUsername(e)}
                        error={!username && error}
                        errorMsg="Kullanıcı zorunlu"
                    />
                    <Input
                        placeholder="Email giriniz"
                        type="email"
                        onChange={(e) => setEmail(e)}
                        error={!validateEmail(email) && error}
                        errorMsg="Email doğru formatta değil"
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

export default Register;
