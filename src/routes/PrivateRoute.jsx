import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../provides/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation(); //3
    // console.log(location);
    console.log('user in private', user);

    if(loading){
        return <Spinner animation="border" variant="primary" />
    }

    //1
    if(user){
        return children;
    }
    else {
        return <Navigate state={{from: location}} to="/login"></Navigate>;
    }
     /* (
        <div>
            
        </div>
    ); */
};

export default PrivateRoute;


/**
 * -------------------------STEPS-------------------------
 * 1. Check user logged in or not
 * 2. if user logged in, then allow them to visit the route
 * 3. else redirect the user to the login page 
 * 4. setup the private or protected router 
 * 5. handle loading 
*/