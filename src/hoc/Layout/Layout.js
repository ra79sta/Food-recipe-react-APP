import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

import "./Layout.css";

import Auxilery from "../../hoc/Auxilery/Auxilery";
import Header from "../../components/Header/Header";

class Layout extends Component {
  getRecipe = e => {
    let searchValue = e.target.elements.searchValue.value;
    e.preventDefault();
    e.target.reset();
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchValue}`
      )
      .then(response =>
        this.props.history.push({
          pathname: "/search",
          state: { recipe: response.data.meals }
        })
      )
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <Auxilery>
        <Header getRecipe={this.getRecipe} />
        <main className="layout">{this.props.children}</main>
      </Auxilery>
    );
  }
}

export default withRouter(Layout);
