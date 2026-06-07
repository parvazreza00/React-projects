import React from 'react'
import { Outlet } from 'react-router';
import SignIn from '../components/pages/SignIn';

const UserProtectRouter = () => {
    
  const userData = localStorage.getItem("userData") && JSON.parse(localStorage.getItem("userData"));
  return userData.isSignIn ? <Outlet/> : <SignIn/>;
  
}

export default UserProtectRouter
