import axios from 'axios';
import { useAppDispatch } from '../store/hooks';
import { refreshAccessToken } from '../store/slices/auth/authSlice';
import { useAuth } from './useAuth';

export const useResponseInterceptor = () => {
    const {
        loggedUser: { refreshToken },
    } = useAuth();

    const dispatch = useAppDispatch();

    const responseInterceptor = () => {
        axios.interceptors.response.use(
            (response) => response,
            async (error) => {
                const prevRequest = error?.config;
                if (error?.response?.status === 403 && !prevRequest?.sent) {
                    prevRequest.sent = true;
                    const newAccessToken = await dispatch(refreshAccessToken({ refreshToken } ?? ''));
                    prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                    window.location.reload();
                    return axios(prevRequest);
                }
                return Promise.reject(error);
            },
        );
    };

    return responseInterceptor;
};
