import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./Category.css";

class Category extends Component {
  state = {
    categoryRecipes: [],
    recomended: [],
    category: "",
    search: ""
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
      .then(() =>
        this.setState({
          recomended: this.state.recomended.concat(
            this.state.categoryRecipes[
              Math.floor(Math.random() * this.state.categoryRecipes.length)
            ]
          )
        })
      )
      .catch(error => {
        this.setState({ error: true });
        console.log(error);
      });
  };

  updateSearch = event => this.setState({ search: event.target.value });

  render() {
    const categoryRecipes = this.state.categoryRecipes.filter(recipe => {
      return (
        recipe.strMeal
          .toLowerCase()
          .indexOf(this.state.search.toLowerCase()) !== -1
      );
    });
    const recomended = this.state.recomended;

    const recomendedRecipe = recomended.map(rec => {
      return (
          <div key={rec.idMeal} className="recomended">
            <Link
              to={{
                pathname: `/singlemeal`,
                state: {
                  mealId: rec.idMeal,
                  category: this.state.category
                }
              }}
            >
              <img src={rec.strMealThumb} alt={rec.strMeal}></img>
            </Link>
            <h3>{rec.strMeal}</h3>
          </div>
      );
    });

    return (
      <div className="container">
        <h1>{this.state.category}</h1>
        <h2>Our recomendation</h2>
        <div className="searchBox">
          <h3>Filter Recipe by Name</h3>
          <input
            type="text"
            placeholder="Filter Recipe by Name"
            value={this.state.search}
            onChange={this.updateSearch}
          />
        </div>
        {recomendedRecipe}
        <hr width="100%" size="8" align="center" color="black"></hr>
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
