import React, { useContext } from 'react'
import { AuthContext } from '../provider/AuthProvider'
import { Navigate } from 'react-router-dom';
import Loading from '../components/Loading/Loading';

const PrivateRoute = ({children}) => {
   const {user, loading} = useContext(AuthContext);

   // if it is loading, render the Loading component
   if(loading) {
      return <Loading></Loading>
   }

   // if the user exist or has loged in, redirect user to the home page
   if(user) {
      return children;
   }

   // if user is not signed in, redirect the user to login page:
   return <Navigate to={'/auth/login'}></Navigate>
}

export default PrivateRoute
