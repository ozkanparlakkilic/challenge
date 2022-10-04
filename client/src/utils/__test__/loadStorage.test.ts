import { IUser } from '@/models';
import { loadStorage } from '@/utils';

const mockUser: IUser = {
    _id: '',
    fullname: '',
    username: '',
    email: '',
    password: '',
    isAdmin: false,
    friends: [],
    token: '',
    totalPoint: 0,
};

describe('LoadStorage Function Test', () => {
    it('is initialized properly', () => {
        const result = loadStorage<IUser>('user');
        expect(result).toBe(null);
    });

    it('should pass load storage value', () => {
        localStorage.setItem('user', JSON.stringify(mockUser));
        const result = loadStorage<IUser>('user');
        expect(result).toStrictEqual(mockUser);
    });

    it('should fail load storage value', () => {
        const result = loadStorage<IUser>('testing');
        expect(result).not.toStrictEqual(mockUser);
    });

    it('remove item should fail load storage value', () => {
        localStorage.removeItem('user');
        const result = loadStorage<IUser>('user');
        expect(result).toBe(null);
    });
});
