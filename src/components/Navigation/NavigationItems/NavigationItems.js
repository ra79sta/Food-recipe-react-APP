import React, { Component } from "react";

import "./NavigationItems.css";
import NavigationItem from "../NavigationItem/NavigationItem";
import Tooltip from "../../Tooltip/Tooltip";

class NavigationItems extends Component {
  render() {
    const currentPath = window.location.pathname;
    const switchComponents =
      currentPath === "/" ? (
        <Tooltip />
      ) : (
        <NavigationItem link="/" active>
          Home
        </NavigationItem>
      );

    return (
      <ul className="navigationItems">
        {switchComponents}
        <NavigationItem link="/mymeal">My Meal</NavigationItem>
        <NavigationItem link="/about">About Us</NavigationItem>
        <NavigationItem link="/contact">Contact</NavigationItem>
      </ul>
    );
  }
}

export default NavigationItems;
