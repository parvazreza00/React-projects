import React from "react";
import { Card,Button, Badge } from "react-bootstrap";

const MenuItems = (props) => {
    const {dish} = props;
  console.log(dish);
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
            bg="danger" pill
            className="position-absolute top-0 start-0 m-3 px-2 fs-6 text-white"
          >
            {dish.label}
          </Badge>
        )}
      </div>

      <Card.Body className="d-flex flex-column">
        <Card.Title className="fw-bold fs-4" style={{ cursor:"pointer" }} onClick={()=> dish.DishSelect(dish.dish)}>
          {dish.name}
        </Card.Title>

        <Card.Text className="text-muted fs-6 flex-grow-1">
          {dish.description}
        </Card.Text>

        <div className="d-flex justify-content-between align-items-center mt-3">
          <h4 className="text-success fw-bold mb-0">
            <span className="fw-bolder">&#2547;</span> {dish.price}
          </h4>

          <Badge bg="danger" pill className="px-2 fs-6 text-white">
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
