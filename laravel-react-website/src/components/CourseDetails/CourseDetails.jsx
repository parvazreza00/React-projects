import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faClock,
  faUser,
  faList,
  faBookOpen,
  faSignal,
  faGlobe,
  faStar,
  faStarHalfAlt,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import courseImage1 from "../../assets/images/course-image1.jpg";
import codingMan from "../../assets/images/coding-man.jpg";

export class CourseDetails extends Component {
  render() {
    return (
      <Fragment>
        <Container className="mt-5 mb-5">
          <Row>
            {/* Left Column - Course Content */}
            <Col lg={8} md={6} sm={12}>
              <div className="course-main-content">
                <h1 className="course-detail-title">
                  Complete Laravel 13 Development Course
                </h1>

                <div className="course-detail-image-wrapper">
                  <img
                    src={courseImage1}
                    alt="Laravel Course"
                    className="course-detail-image"
                  />
                </div>

                <div className="course-detail-meta">
                  <span className="course-detail-meta-item">
                    <FontAwesomeIcon icon={faUserTie} className="meta-icon" />{" "}
                    By John Doe
                  </span>
                  <span className="course-detail-meta-item">
                    <FontAwesomeIcon icon={faStar} className="star-icon" /> 4.8
                    (2.4k reviews)
                  </span>
                  <span className="course-detail-meta-item">
                    <FontAwesomeIcon icon={faClock} className="meta-icon" />{" "}
                    Last updated 02/2025
                  </span>
                </div>

                <h3 className="section-sub-title">Description</h3>
                <p className="course-description-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Repellat excepturi eius accusamus, vero fugit saepe ad soluta
                  doloribus accusantium harum provident neque, labore error
                  odio! Consequatur expedita laudantium voluptates quos ducimus
                  sed incidunt accusamus illo? Nobis, velit quasi! Rerum earum
                  quo quidem eos dolorem quaerat sint, magni voluptatem aperiam
                  sunt. Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit. Quis, impedit. Sit voluptas doloremque asperiores
                  minima, repudiandae voluptates maiores modi non.
                </p>

                <h3 className="section-sub-title">Course Curriculum</h3>
                <div className="curriculum-list">
                  <div className="curriculum-item">
                    <div className="curriculum-info">
                      <span className="curriculum-icon">
                        <FontAwesomeIcon icon={faBookOpen} />
                      </span>
                      <div>
                        <span className="curriculum-title">
                          Introduction to Laravel 13
                        </span>
                        <span className="curriculum-desc">
                          Overview, installation & environment setup
                        </span>
                      </div>
                    </div>
                    <span className="curriculum-duration">2h 30m</span>
                  </div>
                  <div className="curriculum-item">
                    <div className="curriculum-info">
                      <span className="curriculum-icon">
                        <FontAwesomeIcon icon={faBookOpen} />
                      </span>
                      <div>
                        <span className="curriculum-title">
                          Routing & Controllers
                        </span>
                        <span className="curriculum-desc">
                          Understanding routes, controllers & middleware
                        </span>
                      </div>
                    </div>
                    <span className="curriculum-duration">3h 15m</span>
                  </div>
                  <div className="curriculum-item">
                    <div className="curriculum-info">
                      <span className="curriculum-icon">
                        <FontAwesomeIcon icon={faBookOpen} />
                      </span>
                      <div>
                        <span className="curriculum-title">
                          Blade Templating Engine
                        </span>
                        <span className="curriculum-desc">
                          Mastering Blade directives, layouts & components
                        </span>
                      </div>
                    </div>
                    <span className="curriculum-duration">4h 00m</span>
                  </div>
                  <div className="curriculum-item">
                    <div className="curriculum-info">
                      <span className="curriculum-icon">
                        <FontAwesomeIcon icon={faBookOpen} />
                      </span>
                      <div>
                        <span className="curriculum-title">
                          Eloquent ORM & Database
                        </span>
                        <span className="curriculum-desc">
                          Migrations, models, relationships & queries
                        </span>
                      </div>
                    </div>
                    <span className="curriculum-duration">5h 30m</span>
                  </div>
                  <div className="curriculum-item">
                    <div className="curriculum-info">
                      <span className="curriculum-icon">
                        <FontAwesomeIcon icon={faBookOpen} />
                      </span>
                      <div>
                        <span className="curriculum-title">
                          Authentication & Authorization
                        </span>
                        <span className="curriculum-desc">
                          User auth, gates, policies & roles
                        </span>
                      </div>
                    </div>
                    <span className="curriculum-duration">3h 45m</span>
                  </div>
                  <div className="curriculum-item">
                    <div className="curriculum-info">
                      <span className="curriculum-icon">
                        <FontAwesomeIcon icon={faBookOpen} />
                      </span>
                      <div>
                        <span className="curriculum-title">
                          API Development with Laravel
                        </span>
                        <span className="curriculum-desc">
                          RESTful APIs, Sanctum & API resources
                        </span>
                      </div>
                    </div>
                    <span className="curriculum-duration">4h 20m</span>
                  </div>
                </div>

                <h3 className="section-sub-title">What You'll Learn</h3>
                <div className="learn-grid">
                  <div className="learn-item">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="learn-icon"
                    />
                    <span>
                      Build real-world Laravel applications from scratch
                    </span>
                  </div>
                  <div className="learn-item">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="learn-icon"
                    />
                    <span>Master Eloquent ORM and database relationships</span>
                  </div>
                  <div className="learn-item">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="learn-icon"
                    />
                    <span>
                      Implement authentication & authorization systems
                    </span>
                  </div>
                  <div className="learn-item">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="learn-icon"
                    />
                    <span>RESTful API development with Laravel</span>
                  </div>
                  <div className="learn-item">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="learn-icon"
                    />
                    <span>Deploy and maintain Laravel applications</span>
                  </div>
                  <div className="learn-item">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="learn-icon"
                    />
                    <span>Testing and debugging Laravel applications</span>
                  </div>
                </div>
              </div>
            </Col>

            {/* Right Column - Course Info Sidebar */}
            <Col lg={4} md={6} sm={12}>
              <div className="course-info-sidebar">
                <div className="sidebar-header">
                  <img
                    src={codingMan}
                    alt="Instructor"
                    className="instructor-avatar"
                  />
                  <div>
                    <h5 className="instructor-name">John Doe</h5>
                    <p className="instructor-title">Senior Laravel Developer</p>
                  </div>
                </div>

                <div className="course-price-section">
                  <span className="course-price">$49.99</span>
                  <span className="course-price-original">$129.99</span>
                  <span className="course-discount">61% off</span>
                </div>

                <button className="enroll-btn">Enroll Now</button>
                <button className="enroll-btn-outline">Add to Wishlist</button>

                <div className="course-meta-list">
                  <div className="course-meta-item">
                    <FontAwesomeIcon icon={faUser} className="meta-icon" />
                    <div>
                      <span className="meta-label">Students</span>
                      <span className="meta-value">1,234</span>
                    </div>
                  </div>
                  <div className="course-meta-item">
                    <FontAwesomeIcon icon={faClock} className="meta-icon" />
                    <div>
                      <span className="meta-label">Duration</span>
                      <span className="meta-value">40 hours</span>
                    </div>
                  </div>
                  <div className="course-meta-item">
                    <FontAwesomeIcon icon={faList} className="meta-icon" />
                    <div>
                      <span className="meta-label">Cagegory</span>
                      <span className="meta-value">Technical</span>
                    </div>
                  </div>
                  <div className="course-meta-item">
                    <FontAwesomeIcon icon={faBookOpen} className="meta-icon" />
                    <div>
                      <span className="meta-label">Lectures</span>
                      <span className="meta-value">120 lessons</span>
                    </div>
                  </div>
                  <div className="course-meta-item">
                    <FontAwesomeIcon icon={faSignal} className="meta-icon" />
                    <div>
                      <span className="meta-label">Skill Level</span>
                      <span className="meta-value">Beginner to Advanced</span>
                    </div>
                  </div>
                  <div className="course-meta-item">
                    <FontAwesomeIcon icon={faGlobe} className="meta-icon" />
                    <div>
                      <span className="meta-label">Language</span>
                      <span className="meta-value">English</span>
                    </div>
                  </div>
                </div>

                <div className="course-rating-section">
                  <span className="meta-label">Course Rating</span>
                  <div className="rating-row">
                    <div className="rating-stars">
                      <FontAwesomeIcon icon={faStar} className="star-icon" />
                      <FontAwesomeIcon icon={faStar} className="star-icon" />
                      <FontAwesomeIcon icon={faStar} className="star-icon" />
                      <FontAwesomeIcon icon={faStar} className="star-icon" />
                      <FontAwesomeIcon
                        icon={faStarHalfAlt}
                        className="star-icon"
                      />
                    </div>
                    <span className="rating-score">4.8</span>
                  </div>
                  <span className="rating-reviews">2,456 reviews</span>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="mt-5">
            <h1 className="text-center">Which Skills You needed</h1>
            <Col lg={6} md={6} sm={12}>
              <div className="learn-grid">
                <div className="learn-item">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="learn-icon"
                  />
                  <span>HTML5 AND CSS3 Knowledge</span>
                </div>
                <div className="learn-item">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="learn-icon"
                  />
                  <span>JavaScript BASICS AND ES6/ES7 CONCEPT</span>
                </div>
                <div className="learn-item">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="learn-icon"
                  />
                  <span>BASIC PHP AND MYSQL</span>
                </div>
                <div className="learn-item">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="learn-icon"
                  />
                  <span>BASIC PHP AND MYSQL</span>
                </div>
              </div>
              <div></div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <div className="learn-grid">
                <div className="learn-item">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="learn-icon"
                  />
                  <span>BASIC LARAVEL </span>
                </div>
                <div className="learn-item">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="learn-icon"
                  />
                  <span>MYSQL</span>
                </div>
                <div className="learn-item">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="learn-icon"
                  />
                  <span>AND LEARNING PASSION</span>
                </div>
                <div className="learn-item">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="learn-icon"
                  />
                  <span>AND LEARNING PASSION</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default CourseDetails;
