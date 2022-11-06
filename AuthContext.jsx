import { createContext, useContext, useState, useEffect } from "react";

// Firebase Imports (delete if not relevant) -------->
// import { auth } from '../firebase';
// import {
//     signOut,
//     onAuthStateChanged
// } from 'firebase/auth';

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  // Global state(s) here:
  const [user, setUser] = useState({});

  // Write your global methods here:

  // Pass props/methods via value below:
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Export useContext function for easy import and usage of global state/methods
export const UserAuth = () => {
  return useContext(UserContext);
};
