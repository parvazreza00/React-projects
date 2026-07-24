import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export class Footer extends Component {
  render() {
    return (
      <div>
        <Fragment>
          <Container fluid={true} className="footerSection text-center">
            <Row>
              <Col lg={3} md={6} sm={12} className="p-5 text-center">
                <h2 className="footerName">Follow Me</h2>
                <div className="socialContainer">
                  <a href="" className="facebook social">
                    <FontAwesomeIcon icon={faFacebook} className="fs-4" />
                  </a>
                  <a href="" className="facebook social">
                    <FontAwesomeIcon icon={faYoutube} className="fs-4" />
                  </a>
                  <a href="" className="facebook social">
                    <FontAwesomeIcon icon={faTwitter} className="fs-4" />
                  </a>
                </div>
              </Col>
              <Col lg={3} md={6} sm={12} className="p-5 text-center">
                <h2 className="footerName">Address</h2>
                <p className="footerDescription">
                  41/ka, Kuril-kuratulu, Khilkhet, Dhaka-1229 <br />
                  <FontAwesomeIcon icon={faEnvelope} className="me-1" />
                  Email: parvaz123@gmail.com
                  <br />
                  <FontAwesomeIcon icon={faPhone} className="me-1" />
                  Phone: 01392222222
                </p>
              </Col>
              <Col lg={3} md={6} sm={12} className="p-5 text-center">
                <h2 className="footerName">Information</h2>
                <Link to="/about" className="footerLink">
                  About Me
                </Link>
                <br />
                <Link to="/portfolio" className="footerLink">
                  Company Portfolio
                </Link>
                <br />
                <Link to="/contact" className="footerLink">
                  Contact Us
                </Link>
              </Col>
              <Col lg={3} md={6} sm={12} className="p-5 text-center">
                <h2 className="footerName">Policy</h2>
                <Link to="/refund-policy" className="footerLink">
                  Refund Policy
                </Link>
                <br />
                <Link to="/terms-conditions" className="footerLink">
                  Terms and Condition
                </Link>
                <br />
                <Link to="/privacy-policy" className="footerLink">
                  Privacy Policy
                </Link>
              </Col>
            </Row>
          </Container>

          <Container fluid={true} className="text-center copyRightSection">
            <a href="" className="copyrightLink">
              {" "}
             &copy; Copyright 2022 - {new Date().getFullYear()} by Md Parvaz. All Rights Reserve
            </a>
          </Container>
        </Fragment>
      </div>
    );
  }
}

export default Footer;
