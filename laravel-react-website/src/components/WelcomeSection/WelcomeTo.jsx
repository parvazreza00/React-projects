import React, { Component } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import learningImage1 from "../../assets/images/page1.png";
import learningImage2 from "../../assets/images/page2.png";
import learningImage3 from "../../assets/images/page3.png";

export class WelcomeTo extends Component {
  render() {
    return (
      <section className="welcomeSection">
        <Container>
          <Row className="align-items-center justify-content-center">
            {/* Content */}
            <Col lg={12} md={12} sm={12}>
              <div className="welcomeContent">
                <div className="welcomeTitleWrapper">
                  <span className="welcomeLine"></span>

                  <span className="welcomeSmallTitle">WELCOME</span>

                  <span className="welcomeLine"></span>
                </div>

                <h1 className="welcomeTitle">
                  An Exemplary
                  <br />
                  <span>Learning Community</span>
                </h1>

                <p className="welcomeDescription">
                  Learn, grow, and build your future with a community of
                  passionate learners and experienced mentors. Our goal is to
                  make quality learning simple, practical, and accessible for
                  everyone.
                </p>
              </div>
            </Col>

            {/* Image */}
            <Col lg={4} md={4} sm={12}>
              <div className="welcomeImageWrapper">
                <img
                  src={learningImage1}
                  alt="Learning Community"
                  className="welcomeImage"
                />
                <p>Graduate</p>
              </div>
            </Col>
            <Col lg={4} md={4} sm={12}>
              <div className="welcomeImageWrapper">
                <img
                  src={learningImage2}
                  alt="Learning Community"
                  className="welcomeImage"
                />
                <p>Post Graduate</p>
              </div>
            </Col>
            <Col lg={4} md={4} sm={12}>
              <div className="welcomeImageWrapper">
                <img
                  src={learningImage3}
                  alt="Learning Community"
                  className="welcomeImage"
                />
                <p>Post Graduates</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default WelcomeTo;
