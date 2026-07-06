import React, { Component } from "react";
import { Container, Form, Col, Row, Button } from "react-bootstrap";

export class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      phone: "",
      email: "",
      password: "",
      agree: false,
      message: "",
    };
  }

  handleInputChange = (event) => {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    const nameValues = event.target.name;
    this.setState({
      [nameValues]: value,
    });
  };

  handleFormSubmit = (event) => {
    
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <Container className="mt-4">
          <Form onSubmit={this.handleFormSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleInputChange}
                  placeholder="Enter Name"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="phone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  value={this.state.phone}
                  onChange={this.handleInputChange}
                  placeholder="Phone"
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  placeholder="Password"
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group className="mb-3" controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  value={this.state.message}
                  onChange={this.handleInputChange}
                  rows={3}
                  placeholder="Write your message"
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check
                type="checkbox"
                name="agree"
                checked={this.state.agree}
                onChange={this.handleInputChange}
                label="May we contact you next."
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default Contact;
