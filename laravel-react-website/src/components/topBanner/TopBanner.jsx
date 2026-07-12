import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";


export class TopBanner extends Component {
  render() {
    return <div className="topFixBanner p-0">
        <div className="topBannerOverlay">
            <Container className="topContent">
                <Row>
                    <Col className="text-center">
                    <h1 className="topTitle">React Laravel Website</h1>
                    <h4 className="topSubTitle">Learning with project</h4>
                    <Button variant="primary">Learn More</Button>
                    </Col>
                </Row>
            </Container>

        </div>

    </div>;
  }
}

export default TopBanner;
