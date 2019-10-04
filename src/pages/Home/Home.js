import React, { Component } from "react";
import axios from "axios";

import "./Home.css";

import Auxilery from "../../hoc/Auxilery/Auxilery";
import AboutUs from "../../components/AboutUs/AboutUs";
import Contact from "../../containers/Contact/Contact";
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import CategoriesList from "../../components/CategoriesList/CategoriesList";

class Home extends Component {
  state = {
    categories: [],
    error: false
  };

  getCategory = () => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then(response => {
        this.setState({ categories: response.data.categories });
      })
      .catch(error => {
        this.setState({ error: true });
        console.log(error);
      });
  };

  render() {
    return (
      <Auxilery>
        <HomeHeader clickForCategories={this.getCategory} />
        <CategoriesList categories={this.state.categories} />
        <AboutUs />
        <Contact />
      </Auxilery>
    );
  }
}

export default Home;
