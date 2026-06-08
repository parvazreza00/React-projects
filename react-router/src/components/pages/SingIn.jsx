import React, { useState } from "react";
import { useNavigate } from "react-router";
import { ToastContainer,toast } from 'react-toastify';

const SingIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email == "abc@gmail.com" && password == "123456") {
      const user = {
        name: "ABC",
        email: "abc@gmail.com",
        phone: "01730000000",
        profession: "Software Eng.",
        admin: false,
      };
      localStorage.setItem("userData", JSON.stringify({user, isSignIn:true}));
       toast.success("Signed In Successfully!");
      const path = user.admin ? '/dashboard/admin/profile' : '/dashboard/user/profile';
      navigate(path);
      window.location.reload();
    } else {
      toast.error("Crediantials does not match!");
      navigate("/signin");
     
    }
  };
  return (
    <div>
      <h1>SingIn page </h1>
      <form action="" onSubmit={handleSubmit}>
        <div className="row mt-4">
          <div className="col-md-5">
            <input
              type="email"
              className="form-control"
              name="email"
              value={email}
              placeholder="abc@gmail.com"
              onChange={handleEmail}
            />
          </div>
          <div className="col-md-5">
            <input
              type="password"
              className="form-control"
              name="password"
              value={password}
              placeholder="123456"
              onChange={handlePassword}
            />
          </div>
          <div className="col-md-2">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SingIn;
