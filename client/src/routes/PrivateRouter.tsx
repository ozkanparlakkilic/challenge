import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import React from 'react';

export const PrivateRoute = () => {
    const {
        loggedUser: { isSuccess, accessToken, refreshToken },
    } = useAuth();

    return isSuccess && accessToken && refreshToken ? <Outlet /> : <Navigate to="/login" />;
};
