import React from "react";
import { Link } from "react-router";

import "./signup_login.css";
import phoneIcon from "../assets/phone-icon.png";

const ForgetPassword = () => {
  return (
    <div>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div>
          <div className="card shadow" style={{ width: "30rem" }}>
            <div className="card-body">
              <div className=" py-4 text-center">
                <h1>Forgot password?</h1>
              </div>
              <div className="card-title text-center">
                <p>No worries, we'll send you reset instructions.</p>
              </div>

              <form action="">
                <div className="input-group py-4">
                  <img src={phoneIcon} alt="" className="phoneIconImage rounded" />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Eneter Phone number"
                  ></input>
                </div>
                <div className="text-center py-4">
                  <button type="button" className="me-5 activeBtn">
                    Reset Password
                  </button>
                </div>
              </form>
              <div className="text-center py-4">
                  <Link to="/"> Go Back</Link>                   
                 
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
