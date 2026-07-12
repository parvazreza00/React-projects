import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";


import designIcon from "../../assets/images/design.png";
import ecommerceIcon from "../../assets/images/ecommerce.png";
import webIcon from "../../assets/images/web.png";

export class Services extends Component {
  render() {
    return (
      <div>
        <Container className="text-center">
            <h1 className="serviceMainTitle">My Services</h1>
            <div className="bottomBar"></div>
          <Row>
            <Col lg={4} md={6} sm={12}>
              <div className="serviceCard text-center">
                <img src={ecommerceIcon} className="ecommerceIcon" alt="" />
                <h2 className="serviceName">E-commerce</h2>
                <p className="serviceDescription">I will design and develop ecommer for online web store</p>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className="serviceCard text-center">
                <img src={designIcon} className="designIcon" alt="" />
                <h2 className="serviceName">Web Desgin </h2>
                <p className="serviceDescription">Qualified web design and attractive effects which catches visitores Eye.</p>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              {" "}
              <div className="serviceCard text-center">
                <img src={webIcon} alt="" className="webIcon" />
                <h2 className="serviceName">Web Development</h2>
                <p className="serviceDescription">Clean and fresh issue free code to make your project dynnmic perfectly</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Services;
