import axios, { AxiosRequestConfig } from 'axios';
import { useCallback } from 'react';
import { useAuth } from './useAuth';

export const useRequestInterceptor = () => {
    const {
        loggedUser: { accessToken },
    } = useAuth();

    const requestInterceptor = useCallback(() => {
        try {
            axios.interceptors.request.use((config: AxiosRequestConfig) => {
                if (config.headers) {
                    config.headers.Authorization = 'Bearer ' + accessToken;
                }
                return config;
            });
        } catch (error) {
            console.log(error);
        }
    }, [accessToken]);

    return requestInterceptor;
};
