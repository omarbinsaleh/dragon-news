import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import app from '../firebase/firebase.config';
import { Navigate } from 'react-router-dom';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const[loading, setLoading] = useState(true);

   // sign up or register user function
   function createUser(email, password) {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   }

   // login or Sign-in function:
   function login(email, password) {
      setLoading(true)
     return signInWithEmailAndPassword(auth, email, password)
   }

   // Log out function:
   function logOut() {
      setLoading(true);
      return signOut(auth);
   }

   const authInfo = {
      user,
      setUser,
      auth,
      createUser,
      login,
      logOut,
      loading,
      setLoading
   }

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         console.log('currentUser:',currentUser);
         setUser(currentUser);
         setLoading(false);
      })

      return () => {
         unsubscribe();
      }
   }, [])


   return (
      <AuthContext.Provider value={authInfo}>
         { children }
      </AuthContext.Provider>
   )
}

export default AuthProvider;
