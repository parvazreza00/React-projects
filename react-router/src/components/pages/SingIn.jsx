import React, { useState } from "react";
import { useNavigate } from "react-router";

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

    if (email == "parvaz@gmail.com" && password == "123456") {
        const user = {
            name: "Md. Parvaz",
            email: "parvaz@gmail.com",
            phone: "01738920277",
            profession: "Software Eng.",
        };
      navigate("/profile", {state: user});
    } else {
      navigate("/");
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
              placeholder="Email"
              onChange={handleEmail}
            />
          </div>
          <div className="col-md-5">
            <input
              type="password"
              className="form-control"
              name="password"
              value={password}
              placeholder="Password"
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
    </div>
  );
};

export default SingIn;
