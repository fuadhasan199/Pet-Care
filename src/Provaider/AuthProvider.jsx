import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.confiq"; 
import { onAuthStateChanged, signOut } from "firebase/auth";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, loading, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
