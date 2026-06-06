import React from "react";
import { Outlet } from "react-router";
import SingIn from "../components/pages/SingIn";

const ProtectedUserRoute = () => {
  //api call fetching or
  //redux-store -> user login

  const userData = localStorage.getItem("userData") && JSON.parse(localStorage.getItem("userData"));
  return userData.isSignIn ? <Outlet /> : <SingIn />;
};

export default ProtectedUserRoute;
