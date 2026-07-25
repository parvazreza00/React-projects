import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router";

import courseImage1 from "../../assets/images/course-image1.jpg";

export class Courses extends Component {
  render() {
    return (
      <div>
        <Fragment>
          <Container className="text-center">
            <h1 className="myCoursesHeadline">My Courses</h1>
            <div className="bottomBar"></div>
            <Row>
              <Col lg={6} md={6} sm={12}>
                <Row>
                  <Col lg={6} md={6} sm={12} className="p-2">
                    <img src={courseImage1} alt="" className="courseImage" />
                  </Col>
                  <Col lg={6} md={6} sm={12}>
                    <h5 className="courseName">larave 13</h5>
                    <p className="courseDescription">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Magni eum exercitationem minima dicta ducimus nostrum!
                      Omnis error dicta odit eaque.
                    </p>

                     <Link to="/course-details" className="courseViewMore">
                      View More
                    </Link>
                  </Col>

                  <Col lg={6} md={6} sm={12} className="p-2">
                    <img src={courseImage1} alt="" className="courseImage" />
                  </Col>
                  <Col lg={6} md={6} sm={12}>
                    <h5 className="courseName">larave 13</h5>
                    <p className="courseDescription">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Magni eum exercitationem minima dicta ducimus nostrum!
                      Omnis error dicta odit eaque.
                    </p>

                    <Link to="/course-details" className="courseViewMore">
                      View More
                    </Link>
                  </Col>
                </Row>
              </Col>
              <Col lg={6} md={6} sm={12}>
                 <Row>
                  <Col lg={6} md={6} sm={12} className="p-2">
                    <img src={courseImage1} alt="" className="courseImage" />
                  </Col>
                  <Col lg={6} md={6} sm={12}>
                    <h5 className="courseName">larave 13</h5>
                    <p className="courseDescription">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Magni eum exercitationem minima dicta ducimus nostrum!
                      Omnis error dicta odit eaque.
                    </p>

                    <Link to="/course-details" className="courseViewMore">
                      View More
                    </Link>
                  </Col>

                  <Col lg={6} md={6} sm={12} className="p-2">
                    <img src={courseImage1} alt="" className="courseImage" />
                  </Col>
                  <Col lg={6} md={6} sm={12}>
                    <h5 className="courseName">larave 13</h5>
                    <p className="courseDescription">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Magni eum exercitationem minima dicta ducimus nostrum!
                      Omnis error dicta odit eaque.
                    </p>

                     <Link to="/course-details" className="courseViewMore">
                      View More
                    </Link>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Fragment>
      </div>
    );
  }
}

export default Courses;
