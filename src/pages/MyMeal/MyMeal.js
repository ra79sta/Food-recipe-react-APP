import React, { Component } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

import "./MyMeal.css";
class MyMeal extends Component {
  state = {
    myMeals: [],
    randomMealsArray: [52772, 52819, 52812, 52850, 52830, 52813, 52955, 52911],
    error: false
  };

  componentDidMount = () => {
    this.state.randomMealsArray.map(async idMeal => {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
      );
      this.setState({
        myMeals: this.state.myMeals.concat(response.data.meals)
      });
    });
  };

  render() {
    const myMeals = this.state.myMeals.map(mymeal => {
      return (
        <div key={mymeal.idMeal} className="col-md-4 myMealItem">
          <Link
              to={{
                pathname: `/singlemeal`,
                state: {
                  mealId: mymeal.idMeal,
                  category: mymeal.strCategory
                }
              }}
            >
          <img src={mymeal.strMealThumb} alt={mymeal.strMeal}></img>
          </Link>
          <h3>{mymeal.strMeal}</h3>
          <div>Category: {mymeal.strCategory}</div>
          <div>Country: {mymeal.strArea}</div>
        </div>
      );
    });
    return (
      <div className="myMeal">
        <div className="container">
        <h1>My Meals</h1>
        <hr width="100%" size="8" align="center" color="black"></hr>
        <div className="row">{myMeals}</div>
      </div>
      </div>
    );
  }
}

export default MyMeal;
