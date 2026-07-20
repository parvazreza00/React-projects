import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import aboutme from "../../assets/images/aboutme.jpg";
import { init } from "ityped";

export class AboutMe extends Component {
  typedElement = React.createRef();
  componentDidMount() {
    init(this.typedElement.current, {
      showCursor: false,
      strings: [
        "Laravel Developer",
        "React Developer",
        "Vue.js Developer",
        "Full Stack Developer",
      ],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1500,
    });
  }

  render() {
    return (
      <div>
        <Fragment>
          <Container className="text-center">
            <h1 className="aboutMeHeadline">About Me</h1>
            <div className="clientReviewbottomBar"></div>
            <Row>
              <Col lg={6} md={6} sm={12}>
                <div>
                  <img src={aboutme} alt="" className="aboutMeImg" />
                </div>
              </Col>
              <Col lg={6} md={6} sm={12}>
                <div className="aboutMeBody">
                  <h2 className="aboutmeTitle">Hi! I am there </h2>
                  <h2 className="aboutmeDetails">Yeain Ahmed Parvaz</h2>
                  <span className="aboutmeDetails">
                    Works as <b ref={this.typedElement}></b>
                  </span>
                </div>
              </Col>
            </Row>
          </Container>
        </Fragment>
      </div>
    );
  }
}

export default AboutMe;
