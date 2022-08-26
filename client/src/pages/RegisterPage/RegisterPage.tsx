import React, { useState } from 'react';
import Button from '../../components/common/Button/Button';
import Input from '../../components/common/Input/Input';
import { register } from '../../services/userServices';
import styles from './RegisterPage.module.css';
import { useNavigate } from 'react-router-dom';
import checkEmptyInputValue from '../../utils/checkEmptyInputValue';
import validateEmail from '../../utils/validateEmail';
import ContentLayout from '../../layouts/ContentLayout/ContentLayout';

const RegisterPage = () => {
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
            <div className={`d-flex flex-direction-column ${styles.register_wrapper}`}>
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
                    </form>
                </div>
            </div>
        </ContentLayout>
    );
};

export default RegisterPage;
