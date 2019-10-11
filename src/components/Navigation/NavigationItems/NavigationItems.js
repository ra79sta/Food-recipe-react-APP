import React, { Component } from "react";

import "./NavigationItems.css";
import NavigationItem from "../NavigationItem/NavigationItem";
import Tooltip from "../../Tooltip/Tooltip";

class NavigationItems extends Component {
  state = {
    isLogedIn: false
  };
componentDidMount = () => {
  const json = localStorage.getItem("isLogedIn");
  const isLogedIn = JSON.parse(json)
  this.setState({isLogedIn})
}
  getStateLog = value => {
    this.setState({ isLogedIn: value });
  };
  render() {
    const currentPath = window.location.pathname;
    const switchComponents =
      currentPath === "/" ? (
        <Tooltip getStateLog={this.getStateLog} />
      ) : (
        <NavigationItem link="/" active>
          Home
        </NavigationItem>
      );
    const logedIn = this.state.isLogedIn ? (
      <NavigationItem link="/mymeal">My Meal</NavigationItem>
    ) : null;
    return (
      <ul className="navigationItems">
        {switchComponents}
        {logedIn}
        <NavigationItem link="/about">About Us</NavigationItem>
        <NavigationItem link="/contact">Contact</NavigationItem>
      </ul>
    );
  }
}

export default NavigationItems;
