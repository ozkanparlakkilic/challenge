import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import React from 'react';

export const PrivateRoute = () => {
    const {
        loggedUser: { isSuccess, accessToken },
    } = useAuth();

    return isSuccess && accessToken ? <Outlet /> : <Navigate to="/login" />;
};
