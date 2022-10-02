import { IUser } from '../../models';

interface IAuthState {
    user: IUser | null;
    userId: string | null;
    accessToken: string | null;
    isSuccess: boolean;
    errorMessage: string | null;
}

export type { IAuthState };
