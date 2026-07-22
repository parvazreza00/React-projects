import React, { Component } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

import "../../assets/css/custom.css";

import blackLogo from '../../assets/images/black-logo.jpg'
import whiteLogo from '../../assets/images/white-logo.jpg'

export class TopNavigation extends Component {
  constructor() {
    super();
    this.state = {
      navBarTitle: "navTitle",
      navBarLogo: [whiteLogo],
      nabVariant : "dark",
      navBarBackground: "navBackground",
      navBarItem: "navItem"

    };
  }

  onScroll = () => {
    if (window.scrollY > 100) {
      this.setState({ navBarTitle: "navTitleScroll", navBarLogo:[blackLogo], navBarBackground:"navBackgroundScroll", navBarItem:"navItemScroll", nabVariant:'light' });
    } else if (window.scrollY < 100) {
      this.setState({ navBarTitle: "navTitle", navBarLogo:[whiteLogo], navBarBackground:"navBackground",  navBarItem:"navItem", nabVariant:'dark' });
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
          className={this.state.navBarBackground}          
          variant={this.state.nabVariant} 
        >
          <Container>
            <Navbar.Brand href="#home" className={this.state.navBarTitle}>
              <img src={this.state.navBarLogo} alt="" className="navBarLogo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                <Nav.Link href="#link" className={this.state.navBarItem}>Home</Nav.Link>
                <Nav.Link href="#link" className={this.state.navBarItem}>About</Nav.Link>
                <Nav.Link href="#link"  className={this.state.navBarItem}>Service</Nav.Link>
                <Nav.Link href="#link"  className={this.state.navBarItem}>Courses</Nav.Link>
                <Nav.Link href="#link"  className={this.state.navBarItem}>Portfolio</Nav.Link>
                <Nav.Link href="#link"  className={this.state.navBarItem}>Contact Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default TopNavigation;
