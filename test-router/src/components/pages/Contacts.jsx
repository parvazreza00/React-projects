import React from "react";
import { useNavigate } from "react-router";

const Contacts = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>Contact</h1>

      <div className="mt-2 m-auto">
        <button className="btn btn-secondary" onClick={goToHome}>
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default Contacts;
