import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./Category.css";

class Category extends Component {
  state = {
    categoryRecipes: [],
    category: ""
  };

  componentDidMount = () => {
    const category = this.props.location.state.categoryName;
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then(response => {
        this.setState({
          categoryRecipes: response.data.meals,
          category: category
        });
      })
      .catch(error => {
        this.setState({ error: true });
        console.log(error);
      });
  };

  render() {
    const categoryRecipes = this.state.categoryRecipes;
    return (
      <div className="container">
        <div className="row">
          {categoryRecipes.map(recipes => {
            return (
              <div key={recipes.idMeal} className="col-md-4 recepieItem">
                <Link
                  to={{
                    pathname: `/singlemeal`,
                    state: {
                      mealId: recipes.idMeal,
                      category: this.state.category
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
