import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./Category.css";

class Category extends Component {
  state = {
    categoryRecipes: []
  };

  componentDidMount = () => {
    const category = this.props.location.state.categoryName;
    console.log(category);
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then(response => {
        this.setState({ categoryRecipes: response.data.meals });
      })
      .catch(error => {
        this.setState({ error: true });
        console.log(error);
      });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.categoryRecipes.map(recipes => {
            return (
              <div key={recipes.idMeal} className="col-md-4 recepieItem">
                <Link
                  to={{
                    pathname: `/singlemeal`,
                    state: {
                      mealId: recipes.idMeal,
                      recipes: this.state.categoryRecipes
                    }
                  }}
                >
                  <img src={recipes.strMealThumb} alt={recipes.strMeal}></img>
                </Link>

                <h3>{recipes.strMeal}</h3>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Category;
