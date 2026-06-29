import React, { Component } from "react";
import DISHES from "../../data/dishes";
import MenuItems from "./MenuItems";

export class Menu extends Component {
  state = {
    dishes: DISHES,
    selectedDish: null,
  };

  onDishSelected = (dish) => {
    console.log(dish);
    this.setState({selectedDish:dish})
  }; 


  render() {
    const menu = this.state.dishes.map((item) => {
      return <MenuItems dish={item} key={item.id} DishSelect={this.onDishSelected}/>;
    });

    let dishDetails = null;
    if(this.state.selectedDish != null){
      dishDetails = <DishDetails dish={this.state.selectedDish}/>

    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h1>{menu}</h1>
          </div>
          <div className="col-6">
            <h1>{dishDetails}</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
