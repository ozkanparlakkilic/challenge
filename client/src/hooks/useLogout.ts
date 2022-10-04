import { useAppDispatch } from '@store/hooks';
import { logout as handleLogout } from '@store/slices/auth/authSlice';

export const useLogout = () => {
    const dispatch = useAppDispatch();

    const logout = () => {
        dispatch(handleLogout());
        localStorage.removeItem('accessToken');
        localStorage.removeItem('userId');
        localStorage.removeItem('isSuccess');
    };

    return { logout };
};
