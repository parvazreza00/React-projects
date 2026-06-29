import React, { Component } from "react";
import DISHES from "../../data/dishes";
import MenuItems from "./MenuItems";

export class Menu extends Component {
  state = {
    dishes: DISHES,
  };

  render() {
    const menu = this.state.dishes.map(item => {
        return(
            <MenuItems dish={item} key={item.id}/>
        )
    })
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h1>{menu}</h1>
          </div>
          <div className="col-6">
            <h1>Second column</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
