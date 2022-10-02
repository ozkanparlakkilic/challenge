import axios from 'axios';
import { ILoginResponse, IUser } from '../../models';
import { baseUrl } from '../../utils/baseUrl/getBaseUrl';

const login = (username: string, password: string): Promise<ILoginResponse> =>
    axios.post(`${baseUrl}/api/auth/login`, { username, password }).then((res) => res.data);

const register = (fullname: string, username: string, email: string, password: string): Promise<IUser> =>
    axios
        .post(`${baseUrl}/api/auth/register`, {
            fullname,
            username,
            email,
            password,
        })
        .then((res) => res.data)
        .catch((err) => console.log(err));

export { login, register };
