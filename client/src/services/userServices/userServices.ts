import axios from 'axios';
import { baseUrl } from '../../utils/baseUrl/getBaseUrl';

const login = (username: string, password: string) =>
    axios
        .post(`${baseUrl}/api/users/login`, { username, password })
        .then((res) => res.data)
        .catch((err) => console.log(err));

const register = (fullname: string, username: string, email: string, password: string) =>
    axios
        .post(`${baseUrl}/api/users/register`, {
            fullname,
            username,
            email,
            password,
        })
        .then((res) => res.data)
        .catch((err) => console.log(err));

export { login, register };
