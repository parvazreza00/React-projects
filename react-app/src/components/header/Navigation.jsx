import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router";

const Navigation = () => {
  return (
    <div>
      <Navbar
        bg="dark"
        data-bs-theme="dark"
        expand="lg"
        className="bg-body-tertiary"
      >
        <Container>
          <Navbar.Brand>
            {" "}
            <Link to="/" className="mainmenu">
              {" "}
              <img
                src="/assets/images/logo.jpg"
                alt=""
                className="logoimg"
              />{" "}
            </Link>{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" className="nav-link mainmenu">
                Home
              </Link>

              <Link to="/menu" className="nav-link mainmenu">
                Menu
              </Link>

              <Link to="/about" className="nav-link mainmenu">
                About
              </Link>

              <Link to="/contact" className="nav-link mainmenu">
                Contact
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
