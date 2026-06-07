import React from "react";
import { ToastContainer, toast } from "react-toastify";

const UserProfile = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const user = userData?.user;

  return (
    <div>
      <div className="container">
        {user ? (
          <div className="card w-50 shadow  m-auto">
            <div className="card-header">
              <h1>Your infromantion</h1>
            </div>
            <div className="card-body">
              <p>Name: {user.name}</p>
              <p>Name: {user.email}</p>
              <p>Name: {user.phone}</p>
              <p>Name: {user.profession}</p>
            </div>
          </div>
        ) : (
          <p className="text-center fs-3"> No profile information exist</p>
        )}
      </div>
      <ToastContainer/>
    </div>
  );
};

export default UserProfile;
