import React from 'react'
import { Outlet } from 'react-router';
import SingIn from '../components/pages/SingIn';

const ProtectedAdminRoute = () => {
    //api call fetching or
    //redux-store -> user login 

    const isSignIn = true;
    const isAdmin = true;
    return isSignIn && isAdmin ? <Outlet/> : <SingIn/>;
  
}

export default ProtectedAdminRoute
