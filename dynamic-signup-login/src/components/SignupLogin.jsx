import React, { useState } from "react";
import { Link } from "react-router";

import "./signup_login.css";
import userIcon from "../assets/user-icon.png";
import emailIcon from "../assets/email-icon.png";
import passwordIcon from "../assets/password-icon.png";

const SignupLogin = () => {
  const [action, setAction] = useState("Sign Up");
  return (
    <div>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div>
          <div className="card shadow" style={{ width: "30rem" }}>
            <div className="card-body">
              <div className="card-title py-4 text-center">
                <h1>{action}</h1>
              </div>

              <form>
                {action === "Sign Up" ? (
                  <div></div>
                ) : (
                  <div className="input-group mb-4">
                    <img src={userIcon} alt="" className="iconImage rounded" />
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Username"
                    ></input>
                  </div>
                )}
                <div className="input-group mb-4">
                  <img src={emailIcon} alt="" className="iconImage rounded" />
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  ></input>
                </div>
                <div className="input-group mb-4">
                  <img
                    src={passwordIcon}
                    alt=""
                    className="iconImage rounded"
                  />
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  ></input>
                </div>
                {action === "Sign Up" ? (
                  <div></div>
                ) : (
                  <div className="input-group mb-4">
                    <p>
                      Forgot Password?
                      <Link to="/forget-password">Click Me</Link>
                    </p>
                  </div>
                )}

                <div className="d-flex justify-content-center mb-4">
                  <button
                    type="button"
                    className={`me-3 ${action === "Sign Up" ? "activeBtn" : "inactiveBtn"}`}
                    onClick={() => setAction("Sign Up")}
                  >
                    Sign Up
                  </button>

                  <button
                    type="button"
                    className={`${action === "Log In" ? "activeBtn" : "inactiveBtn"}`}
                    onClick={() => setAction("Log In")}
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
