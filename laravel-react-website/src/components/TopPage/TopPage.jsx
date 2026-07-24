import React, { Component } from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";

export class TopPage extends Component {
  render() {
    return (
    <div className="topFixPage p-0">
        <div className="topPageOverlay">
            <Container className="topPageContent">
                <Row>
                    <Col className="text-center">
                   
                    <h4 className="topPageSubTitle">{this.props.pageTitle}</h4>
                   
                    </Col>
                </Row>
            </Container>

        </div>

    </div>
    )
  }
}

export default TopPage
