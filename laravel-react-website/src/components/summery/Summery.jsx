import React, { Component } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faGlobe, faLaptop, faStar } from '@fortawesome/free-solid-svg-icons'
import { CountUp } from "react-countup";

export class Summery extends Component {

  render() {
    return (
      <div className="summeryBanner p-0">
        <div className="summeryOverlay">
          <Container className="text-center">
            <Row className="counterSection">
              <Col lg={8} md={6} sm={12}>
                <Row>
                  <Col lg={4} md={6} sm={12}>
                  <FontAwesomeIcon icon={faGlobe} className="text-white fs-4"/>
                   <h1 className="counterNumber">100000</h1>
                   {/* <h1 className="counterNumber">
  <CountUp
    start={0}
    end={100000}
    duration={3}
  />
</h1> */}
                    <h4 className="counterTitle">Students Worldwide</h4>
                    <hr className="HRBar" />
                  </Col>
                  <Col lg={4} md={6} sm={12}>
                   <FontAwesomeIcon icon={faLaptop} className="text-white fs-4"/>
                    <h1 className="counterNumber">22</h1>
                    <h4 className="counterTitle">Courses Published</h4>
                    <hr className="HRBar" />
                  </Col>
                  <Col lg={4} md={6} sm={12}>
                   <FontAwesomeIcon icon={faStar} className="text-white fs-4"/>
                    <h1 className="counterNumber">3000</h1>
                    <h4 className="counterTitle">Students Reviews</h4>
                    <hr className="HRBar" />
                  </Col>
                </Row>
              </Col>

              <Col lg={4} md={6} sm={12}>
                <Row>
                  <Col lg={4} md={6} sm={12}>
                    <Card style={{ width: "20rem", padding:"10px" }}>
                      
                      <Card.Body>
                        <Card.Title className="cardTitle">What I have Archived</Card.Title>
                        <div>
                          <p className="cardSubTitle"><FontAwesomeIcon icon={faCheck} className="border border-2" style={{ fontSize:"12px" }}/> Requirement Gathering</p>
                          <p className="cardSubTitle"><FontAwesomeIcon icon={faCheck} className="border border-2" style={{ fontSize:"12px" }}/> System Analysis</p>
                          <p className="cardSubTitle"><FontAwesomeIcon icon={faCheck} className="border border-2" style={{ fontSize:"12px" }}/> Coding Testing</p>                        
                          <p className="cardSubTitle"><FontAwesomeIcon icon={faCheck} className="border border-2" style={{ fontSize:"12px" }}/> Implementation</p>                        
                                                  
                        </div>                       
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Summery;
