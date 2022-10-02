import { useAppSelector } from '../store/hooks';
import { selectAccessToken, selectUserId, selectIsSuccess } from '../store/slices/auth/authSlice';
import { useEffect, useMemo } from 'react';

export const useAuth = () => {
    const accessToken = useAppSelector(selectAccessToken) ?? '';
    const userId = useAppSelector(selectUserId) ?? '';
    const isSuccess = useAppSelector(selectIsSuccess);

    useEffect(() => {
        localStorage.setItem('accessToken', JSON.stringify(accessToken));
        localStorage.setItem('userId', JSON.stringify(userId));
        localStorage.setItem('isSuccess', JSON.stringify(isSuccess));
    }, [accessToken, userId, isSuccess]);

    return {
        loggedUser: useMemo(
            () => ({
                accessToken,
                userId,
                isSuccess,
            }),
            [accessToken, userId, isSuccess],
        ),
    };
};
