import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router";
import { ToastContainer, toast } from "react-toastify";

const Navbar = () => {
  const [isSignIn, setIsSignIn] = useState(() => {
    const data = JSON.parse(localStorage.getItem("userData"));
    return data?.isSignIn || false;
  });

  const handleSignOut = () => {
    localStorage.setItem(
      "userData",
      JSON.stringify({ user: null, isSignIn: false }),
    );
    setIsSignIn(false);    
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">
            MyApp
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="about">
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="contacts">
                  Contact
                </Link>
              </li>
              {isSignIn ? (
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="signout"
                    onClick={handleSignOut}
                  >
                    Singout
                  </Link>
                </li>
              ) : (
                <li className="nav-item">
                  <Link className="nav-link" to="signin">
                    SingIn
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        {/* <ToastContainer/> */}
        <Outlet />
      </div>
    </>
  );
};

export default Navbar;
