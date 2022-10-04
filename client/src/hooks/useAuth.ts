import { useAppSelector } from '@store/hooks';
import { selectAccessToken, selectUserId, selectIsSuccess, selectRefreshToken } from '@store/slices/auth/authSlice';
import { useEffect, useMemo } from 'react';

export const useAuth = () => {
    const accessToken = useAppSelector(selectAccessToken) ?? null;
    const refreshToken = useAppSelector(selectRefreshToken) ?? null;
    const userId = useAppSelector(selectUserId) ?? null;
    const isSuccess = useAppSelector(selectIsSuccess);

    useEffect(() => {
        localStorage.setItem('accessToken', JSON.stringify(accessToken));
        localStorage.setItem('refreshToken', JSON.stringify(refreshToken));
        localStorage.setItem('userId', JSON.stringify(userId));
        localStorage.setItem('isSuccess', JSON.stringify(isSuccess));
    }, [accessToken, refreshToken, userId, isSuccess]);

    return {
        loggedUser: useMemo(
            () => ({
                accessToken,
                refreshToken,
                userId,
                isSuccess,
            }),
            [accessToken, refreshToken, userId, isSuccess],
        ),
    };
};
