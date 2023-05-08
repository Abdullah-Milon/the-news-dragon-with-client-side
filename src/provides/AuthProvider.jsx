import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth"; 
import app from './../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {   // 1
    const user = null ; /* 3
     const user = {displayName: 'Muri khan'} */ 

     const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
     }

     const signInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
     }

    const authInfo = {
        user,
        createUser,
        signInUser,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;