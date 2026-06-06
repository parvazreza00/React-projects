import React from "react";
import { Link, Outlet } from "react-router";

const Navbar = () => {
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

              <li className="nav-item">
                <Link className="nav-link" to="signin">
                  Sign In
                </Link>
              </li>

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