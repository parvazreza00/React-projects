import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row>
          {/* Company */}
          <Col md={4} className="mb-3">
            <h5>Restaurant</h5>
            <p>
              We serve fresh and delicious food with quality ingredients. Thank
              you for choosing us.
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={4} className="mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-light text-decoration-none">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-light text-decoration-none">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-light text-decoration-none">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-light text-decoration-none">
                  Contact
                </Link>
              </li>
            </ul>
          </Col>

          {/* Contact */}
          <Col md={4} className="mb-3">
            <h5>Contact</h5>
            <p>📍 Dhaka, Bangladesh</p>
            <p>📞 +880 1700-000000</p>
            <p>📧 info@restaurant.com</p>
          </Col>
        </Row>

        <hr className="border-secondary" />

        <Row>
          <Col className="text-center">
            <p className="mb-0">
              © {new Date().getFullYear()} Restaurant. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
