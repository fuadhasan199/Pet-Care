import React, { useState } from 'react';
import { createContext } from 'react';
 

export const AuthContext=createContext()
const AuthProvider = ( {children} ) => { 


 const[user,setUser]=useState( {
      name:"Fuad hasan",
    email:"fuadhasan740266@gmail.com",
 })
  
 const authData={
    user,setUser
 } 
 return <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>






   
      
  
};

export default AuthProvider;