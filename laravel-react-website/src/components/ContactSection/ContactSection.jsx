import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export class ContactSection extends Component {
  render() {
    return (
      <Fragment>
        <Container className='mt-5'>
            <Row>
                <Col lg={6} md={6} sm={12}>
                <h1 className="serviceName">Quick Connect</h1>
                 <Form>
                   <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Write your comment..."/>
      </Form.Group>
       <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
                </Col>
                <Col lg={6} md={6} sm={12}>
                <h1 className="serviceName">Discussion Now</h1>
                 <p className="contactAddress">
                  41/ka, Kuril-kuratulu, Khilkhet, Dhaka-1229 <br />
                  <FontAwesomeIcon icon={faEnvelope} className="me-1" />
                  Email: parvaz123@gmail.com
                  <br />
                  <FontAwesomeIcon icon={faPhone} className="me-1" />
                  Phone: 01392222222
                </p>
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default ContactSection
