import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import React from 'react';

export const PrivateRoute = ({ component, ...rest }: any) => {
    const {
        loggedUser: { isSuccess, accessToken },
    } = useAuth();

    return isSuccess && accessToken ? <Outlet /> : <Navigate to="/login" />;
};
