import React from 'react'
import { Outlet } from 'react-router';
import SignIn from '../components/pages/SignIn';

const AdminUserProtectRouter = () => {
 const isSignIn = true;
 const isAdmin = true;
 return isAdmin && isSignIn ? <Outlet/> : <SignIn/>

}

export default AdminUserProtectRouter
