import React, { useState } from "react";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from 'react-toastify';

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email == "parvazreza00@gmail.com" && password == "123456") {
      const user = {
        name: "parvazreza00",
        email: "parvazreza00@gmial.com",
        phone: "01738920277",
        profession: "Software Eng.",
        admin: false,
      }     
      localStorage.setItem("userData", JSON.stringify({user, isSignIn: true}));
       const path = user.admin ? "/dashboar/admin/profile" : "/dashboar/user/profile";
      navigate(path);
      window.location.reload();

    } else {
      navigate("/signin");
      toast.error("Crediantials mismatch!");
    }
  };

  return (
    <div>
      <h1>SigiIn page</h1>

      <div className="mt-4">
        <form action="" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-5">
              <label htmlFor="">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                className="form-control"
                placeholder="Enter email"
                value={email}
                onChange={handleEmail}
              />
            </div>
            <div className="col-md-5">
              <label htmlFor="">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                placeholder="Enter Password"
                value={password}
                onChange={handlePassword}
              />
            </div>
            <div className="col-md-2 mt-3">
              <button className="btn btn-primary">Submit</button>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default SignIn;
