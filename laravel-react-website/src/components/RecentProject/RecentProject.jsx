import React, { Component, Fragment } from 'react'
import { Card, Col, Container, Row, Button } from 'react-bootstrap'
import {Link} from 'react-router'
import recentproject1 from "../../assets/images/coding-man.jpg";
import recentproject2 from "../../assets/images/recent-project-2.jpg";
import recentproject3 from "../../assets/images/recent-project-3.jpg";

export class RecentProject extends Component {
  render() {
    return (
      <div>
        <Fragment>
            <Container className="text-center">
                 <h1 className="myRecentProjectHeadline">My Recent Projects</h1>
            <div className="bottomBar"></div>
                <Row>
                    <Col lg={4} md={6} sm={12}>
                        <Card className='recentProjectCard'>
      <Card.Img variant="top" src={recentproject1} style={{ height:"300px" }}/>
      <Card.Body>
        <Card.Title className='recentProjectName'>Card Title</Card.Title>
        <Card.Text className='recentProjectDescription'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">
          <Link to="/project-details" className="projectLinkButton">
            Read More
          </Link>
        </Button>
      </Card.Body>
    </Card>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                     <Card className='recentProjectCard'>
      <Card.Img variant="top" src={recentproject2} style={{ height:"300px" }}/>
      <Card.Body>
        <Card.Title className='recentProjectName'>Card Title</Card.Title>
        <Card.Text className='recentProjectDescription'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">
          <Link to="/project-details" className="projectLinkButton">
            Read More
          </Link>
        </Button>
      </Card.Body>
    </Card>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                     <Card className='recentProjectCard'>
      <Card.Img variant="top" src={recentproject3} style={{ height:"300px" }}/>
      <Card.Body>
        <Card.Title className='recentProjectName'>Card Title</Card.Title>
        <Card.Text className='recentProjectDescription'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">
          <Link to="/project-details" className="projectLinkButton">
            Read More
          </Link>
        </Button>
      </Card.Body>
    </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
        
      </div>
    )
  }
}

export default RecentProject
