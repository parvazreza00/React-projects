import React, { useState } from "react";

import "./signup_login.css";
import userIcon from "../../assets/user-icon.png";
import emailIcon from "../../assets/email-icon.png";
import passwordIcon from "../../assets/password-icon.png";

const SignupLogin = () => {
  const [action, setAction] = useState("Sign Up");
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ backgroundColor: "purple", minHeight: "100vh" }}
    >
      <div className="card shadow" style={{ width: "50rem" }}>
        <div className="card-body">
          <div className="card-title text-center">
            <h2>Sign Up - Sign In Dynamic System</h2>
            <div className="p-3" style={{ backgroundColor: "lightcyan" }}>
              <div className="py-4">
                <h1>{action}</h1>
              </div>
              <form action="">
                {action === "LogIn" ? (
                  <div></div>
                ) : (
                  <div className="input-group flex-nowrap mb-4">
                    <img src={userIcon} alt="" className="iconImage rounded " />
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Username"
                    ></input>
                  </div>
                )}

                <div className="input-group flex-nowrap mb-4">
                  <img src={emailIcon} alt="" className="iconImage rounded " />
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Email"
                  ></input>
                </div>
                <div className="input-group flex-nowrap mb-4">
                  <img
                    src={passwordIcon}
                    alt=""
                    className="iconImage rounded "
                  />
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Password"
                  ></input>
                </div>
                {action === "Sign Up" ? (
                  <div></div>
                ) : (
                  <div className="input-group flex-nowrap mb-4">
                    <p>
                      Forget password?
                      <a href="#">
                        <b>Click Here</b>
                      </a>
                    </p>
                  </div>
                )}

                <div className="text-center mb-4">
                  <button
                    type="button"
                    className={`me-5 signupBtn ${action === "Sign Up" ? "activeBtn" : ""}`}
                    onClick={() => setAction("Sign Up")}
                  >
                    Sign Up
                  </button>

                  <button
                    type="button"
                    className={`ms-5 loginBtn ${action === "LogIn" ? "activeBtn" : ""}`}
                    onClick={() => setAction("LogIn")}
                  >
                    Log In
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupLogin;
