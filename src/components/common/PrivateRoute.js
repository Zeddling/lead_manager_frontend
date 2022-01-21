import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';

const PrivateRoute = ({ children }) => {
    const auth = useSelector(state => state.auth)

    if (auth.isLoading) {
        return <h2>Loading...</h2>
    } else if (!auth.isAuthenticated) {
        return < Navigate to={"login"} />
    } else {
        return children
    }
};

export default PrivateRoute;
