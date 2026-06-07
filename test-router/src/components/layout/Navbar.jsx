import React, { useState } from "react";
import { Link, Outlet } from "react-router";

const Navbar = () => {
  const [isSignIn, setIsSignIn] = useState(() => {
    const data = JSON.parse(localStorage.getItem("userData"));
    return data?.isSignIn || false;
  });

  const handleLogOut = () => {
    localStorage.setItem("userData", JSON.stringify({user:null, isSignIn:false}));
    setIsSignIn(false);
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          {/* Brand */}
          <Link className="navbar-brand fw-bold" to="/">
            MyApp
          </Link>

          {/* Toggle button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu */}
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
                  Contacts
                </Link>
              </li>
              {isSignIn && (
                <li className="nav-item">
                  <Link className="nav-link" to="signin" onClick={handleLogOut}>
                    Sign Out
                  </Link>
                </li>
              )}
              {!isSignIn && (
                <li className="nav-item">
                  <Link className="nav-link" to="signin">
                    Sign In
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <Outlet />
      </div>
    </>
  );
};

export default Navbar;
