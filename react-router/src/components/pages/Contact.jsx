import React from "react";
import { useNavigate } from "react-router";

const Contact = () => {

  const navigate = useNavigate();
  const handleGoToHome = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Contact page</h1>
      <button onClick={handleGoToHome}>Go to Home page</button>
    </div>
  );
};

export default Contact;
