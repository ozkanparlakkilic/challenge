import axios from 'axios';
import { IUser } from '@/models';
import { baseUrl } from '@/utils';

const getUserById = (userId: string | undefined): Promise<IUser> =>
    axios.get(`${baseUrl}/api/users/${userId}`).then((res) => res.data);

export { getUserById };
