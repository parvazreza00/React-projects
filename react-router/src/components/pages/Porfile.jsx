import React from "react";
import { useLocation } from "react-router";

const Porfile = () => {
  const { state } = useLocation();
  return (
    <div>
      {state ? (
        <>
          <h1>Profile page</h1>
          <p>User Name : {state.name}</p>
          <p>User Email : {state.email}</p>
          <p>User Phone : {state.phone}</p>
          <p>User Profession : {state.profession}</p>
        </>
      ) : (
        <p className="text-center fs-3"> No profile information exist</p>
      )}
    </div>
  );
};

export default Porfile;
