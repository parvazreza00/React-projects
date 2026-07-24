import React, { Component } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router";

import "../../assets/css/custom.css";

import blackLogo from '../../assets/images/black-logo.jpg'
import whiteLogo from '../../assets/images/white-logo.jpg'

export class TopNavigation extends Component {
  constructor(props) {
    super();
    this.state = {
      navBarTitle: "navTitle",
      navBarLogo: [whiteLogo],
      nabVariant : "dark",
      navBarBackground: "navBackground",
      navBarItem: "navItem",
      pageTitle: props.title

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
        <title>{this.state.pageTitle}</title>
        <Navbar 
          expand="lg"
          fixed="top"
          className={this.state.navBarBackground}          
          variant={this.state.nabVariant} 
        >
          <Container>
            <Navbar.Brand as={Link} to="/" className={this.state.navBarTitle}>
              <img src={this.state.navBarLogo} alt="" className="navBarLogo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                <Nav.Link as={NavLink} to="/" className={({ isActive }) => isActive ? `${this.state.navBarItem} active` : this.state.navBarItem }>Home</Nav.Link>
                <Nav.Link as={NavLink} to="/about" className={ ({isActive}) => isActive ? `${this.state.navBarItem} active` : this.state.navBarItem }>About</Nav.Link>               
                <Nav.Link as={NavLink} to="/service"  className={({isActive}) => isActive ? `${this.state.navBarItem} active` : this.state.navBarItem }>Service</Nav.Link>
                <Nav.Link as={NavLink} to="/courses"  className={({isActive}) => isActive ? `${this.state.navBarItem} active` : this.state.navBarItem }>Courses</Nav.Link>
                <Nav.Link as={NavLink} to="/portfolio"  className={({isActive}) => isActive ? `${this.state.navBarItem} active` : this.state.navBarItem }>Portfolio</Nav.Link>
                <Nav.Link as={NavLink} to="/contact"  className={({isActive}) => isActive ? `${this.state.navBarItem} active` : this.state.navBarItem }>Contact Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default TopNavigation;
