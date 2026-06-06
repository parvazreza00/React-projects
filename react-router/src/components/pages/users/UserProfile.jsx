import React from "react";
// import { useLocation } from "react-router";
import { ToastContainer } from 'react-toastify';

const UserPorfile = () => {
  // const { state } = useLocation();
  const userData = JSON.parse(localStorage.getItem("userData"));
  const user = userData?.user;
  return (
    <div>
      {user ? (
        <>
          <h1>Profile page</h1>
          <p>User Name : {user.name}</p>
          <p>User Email : {user.email}</p>
          <p>User Phone : {user.phone}</p>
          <p>User Profession : {user.profession}</p>
        </>
      ) : (
        <p className="text-center fs-3"> No profile information exist</p>
      )}

      <ToastContainer />
    </div>
  );
};

export default UserPorfile;
