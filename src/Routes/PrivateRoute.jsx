import React, { Children, useContext } from 'react';
import { AuthContext } from '../Provaider/AuthProvider'; 
import { Navigate, useLocation } from 'react-router';


const PrivateRoute = ({children}) => { 

const { user } = useContext(AuthContext)

 const location =useLocation() 

 if(!user) {
    return <Navigate to={'/login'}></Navigate>
 } 

 return children 






   
};

export default PrivateRoute;