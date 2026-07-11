import React, { Component } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

export class TopNavigation extends Component {
  constructor() {
    super();
    this.state = {
      navBarTitle: "navTitle",
    };
  }

  onScroll = () => {
    if (window.scrollY > 100) {
      this.setState({ navBarTitle: "navTitleScroll" });
    } else if (window.scrollY < 100) {
      this.setState({ navBarTitle: "navTitle" });
    }
  };

  componentDidMount(){
    window.addEventListener('scroll', this.onScroll)
  }

  render() {
    return (
      <div>
        <Navbar
          expand="lg"
          fixed="top"
          className="bg-body-tertiary"
          bg="dark"
          data-bs-theme="dark"
        >
          <Container>
            <Navbar.Brand href="#home" className={this.state.navBarTitle}>
              Laravel-React Website
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                <Nav.Link href="#link">Home</Nav.Link>
                <Nav.Link href="#link">About</Nav.Link>
                <Nav.Link href="#link">Service</Nav.Link>
                <Nav.Link href="#link">Courses</Nav.Link>
                <Nav.Link href="#link">Portfolio</Nav.Link>
                <Nav.Link href="#link">Contact Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default TopNavigation;
