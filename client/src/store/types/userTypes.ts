import { IUser } from '../../@types';

interface IUserState {
    data: IUser | null;
    loading: boolean;
    errorMessage: string;
}

export type { IUserState };
