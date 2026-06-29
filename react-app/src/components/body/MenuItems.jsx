import React from "react";
import { Card,Button, Badge } from "react-bootstrap";

const MenuItems = (props) => {
    const {dish} = props;
//   console.log(props);
  return (
    <div>
       <Card
      className="shadow-lg border-0 rounded-4 overflow-hidden h-100 card-hover"
      style={{ width: "22rem" }}
    >
      <div className="position-relative">
        <Card.Img
          variant="top"
          src={dish.image}
          style={{ height: "220px", objectFit: "cover" }}
        />

        {dish.label && (
          <Badge
            bg="danger"
            className="position-absolute top-0 end-0 m-3 px-2 py-1"
          >
            {dish.label}
          </Badge>
        )}
      </div>

      <Card.Body className="d-flex flex-column">
        <Card.Title className="fw-bold fs-4">
          {dish.name}
        </Card.Title>

        <Card.Text className="text-muted fs-6 flex-grow-1">
          {dish.description}
        </Card.Text>

        <div className="d-flex justify-content-between align-items-center mt-3">
          <h4 className="text-success fw-bold mb-0">
            <span className="fw-bolder">&#2547;</span> {dish.price}
          </h4>

          <Badge bg="dark" pill className="p-1">
            {dish.category}
          </Badge>
        </div>

        <Button
          variant="warning"
          className="mt-4 fw-semibold rounded-pill"
        >
          Order Now
        </Button>
      </Card.Body>
    </Card>
    </div>
  );
};

export default MenuItems;
