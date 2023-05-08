import React, { createContext } from 'react';
import { getAuth } from "firebase/auth"; 
import app from './../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {   //1
    const user = null ///3
    /* const user = {displayName: 'Muri khan'} */ ///3

    const authInfo = {
        user
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;