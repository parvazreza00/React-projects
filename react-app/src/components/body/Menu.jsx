import React, { Component } from "react";
import DISHES from "../../data/dishes";
import MenuItems from "./MenuItems";
import DishDetails from "./DishDetails";
import { Container, Row, Modal, Button } from "react-bootstrap";

export class Menu extends Component {
  state = {
    dishes: DISHES,
    selectedDish: null,
    show: false,
  };

  modalClose = () => this.setState({show:false}); 
  modalOpen = () => this.setState({show:true}); 

  onDishSelected = (dish) => {
    // console.log(dish);
    this.setState({ selectedDish: dish, show: !this.setState.show });
  };

  render() {
    const menu = this.state.dishes.map((item) => {
      return (
        <MenuItems dish={item} key={item.id} DishSelect={this.onDishSelected} />
      );
    });

    let dishDetails = null;
    if (this.state.selectedDish != null) {
      dishDetails = <DishDetails dish={this.state.selectedDish} />;
    }

    return (
      <Container fluid>
        <Row lg={3} md={3} sm={6} xs={6}>
          {menu}
        </Row>

        <Modal show={this.state.show} onHide={this.modalClose}>         
          <Modal.Body>
            {dishDetails}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.modalClose}>
              Close
            </Button>           
          </Modal.Footer>
        </Modal>
      </Container>
    );
  }
}

export default Menu;
