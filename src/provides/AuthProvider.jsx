import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"; 
import app from './../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {   // 1

    const [user, setUser] = useState(null);

     /*const user = null ; 3
     const user = {displayName: 'Muri khan'} */ 

     const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
     }

     const signInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
     }

     const logOut = () =>{
        return signOut(auth);
     }

     useEffect(() =>{
       const unsubscribe = onAuthStateChanged(auth, loggedUser =>{
            console.log('logged in user inside auth state observer', loggedUser);
            setUser(loggedUser)
        })

        return () =>{
            unsubscribe();
        }
     },[])

    const authInfo = {
        user,
        createUser,
        signInUser,
        logOut,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;