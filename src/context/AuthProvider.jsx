import React from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({children}) => {

    const newUser = () =>{

    }

    const userInfo = {
        newUser,
        
    }

    return (
        <AuthContext value={userInfo}>{children}</AuthContext>
    );
};

export default AuthProvider;