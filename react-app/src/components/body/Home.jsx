import React, { Component } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

export class Home extends Component {
  render() {
    return (
      <div>
        {/* Hero Section */}
        <section
          className="text-center text-white py-5"
          style={{
            background:
              "linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url('/assets/images/banner.jpg') center/cover",
            minHeight: "500px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Container>
            <h1 className="display-3 fw-bold">
              Welcome to <span className="text-warning">Food Paradise</span>
            </h1>

            <p className="lead mt-3">
              Fresh Ingredients • Delicious Recipes • Memorable Dining
            </p>

            <Button variant="warning" size="lg" className="mt-3">
              Order Now
            </Button>
          </Container>
        </section>

        {/* Featured Dishes */}
        <Container className="py-5">
          <h2 className="text-center mb-5 fw-bold">Our Special Dishes</h2>

          <Row>
            <Col md={4} className="mb-4">
              <Card className="shadow border-0 h-100">
                <Card.Img
                  variant="top"
                  src="/assets/images/items1.jpg"
                  style={{ height: "220px", objectFit: "cover" }}
                />
                <Card.Body className="text-center">
                  <Card.Title>Cheese Burger</Card.Title>
                  <Card.Text>
                    Juicy grilled beef with melted cheese and fresh vegetables.
                  </Card.Text>
                  <h4 className="text-danger"><span className="fw-bolder">&#2547;</span> 170</h4>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} className="mb-4">
              <Card className="shadow border-0 h-100">
                <Card.Img
                  variant="top"
                  src="/assets/images/items2.jpg"
                  style={{ height: "220px", objectFit: "cover" }}
                />
                <Card.Body className="text-center">
                  <Card.Title>Italian Pizza</Card.Title>
                  <Card.Text>
                    Crispy crust topped with mozzarella and fresh toppings.
                  </Card.Text>
                  <h4 className="text-danger"><span className="fw-bolder">&#2547;</span> 250</h4>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} className="mb-4">
              <Card className="shadow border-0 h-100">
                <Card.Img
                  variant="top"
                  src="/assets/images/items3.jpg"
                  style={{ height: "220px", objectFit: "cover" }}
                />
                <Card.Body className="text-center">
                  <Card.Title>Creamy Pasta</Card.Title>
                  <Card.Text>
                    Rich creamy pasta served with herbs and parmesan cheese.
                  </Card.Text>
                  <h4 className="text-danger"><span className="fw-bolder">&#2547;</span> 650</h4>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        {/* Why Choose Us */}
        <section className="bg-light py-5">
          <Container>
            <h2 className="text-center mb-5 fw-bold">Why Choose Us?</h2>

            <Row className="text-center">
              <Col md={4}>
                <h1>🍽️</h1>
                <h4>Fresh Food</h4>
                <p>
                  We prepare every meal with fresh ingredients and authentic
                  recipes.
                </p>
              </Col>

              <Col md={4}>
                <h1>👨‍🍳</h1>
                <h4>Expert Chefs</h4>
                <p>
                  Our experienced chefs create unforgettable flavors for every
                  guest.
                </p>
              </Col>

              <Col md={4}>
                <h1>🚚</h1>
                <h4>Fast Delivery</h4>
                <p>
                  Enjoy your favorite meals delivered quickly to your doorstep.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    );
  }
}

export default Home;