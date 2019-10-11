import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./Search.css";

class Search extends Component {
  state = {
    randomRecipe: [],
    error: false
  };

  componentDidMount() {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then(response => {
        this.setState({ randomRecipe: response.data.meals[0] });
      })
      .catch(error => {
        this.setState({ error: true });
        console.log(error);
      });
  }

  render() {
  
    const randomRecipe = this.state.randomRecipe;
    const searchRecipes = this.props.location.state.recipe;
    const listOfSearchRecipes =
      searchRecipes !== undefined ? (
        searchRecipes.map(searchRecipe => (
          <div key={searchRecipe.idMeal}>
            <Link
              to={{
                pathname: `/singlemeal`,
                state: {
                  mealId: searchRecipe.idMeal,
                  category: searchRecipe.strCategory
                }
              }}
            >
              <img
                src={searchRecipe.strMealThumb}
                alt={searchRecipe.strMeal}
              ></img>
            </Link>
            <h3>{searchRecipe.strMeal}</h3>
            <div>Category: {searchRecipe.strCategory}</div>
            <div>Country: {searchRecipe.strArea}</div>
          </div>
        ))
      ) : (
        <h2>No results for that input</h2>
      );

    return (
      <div>
        <h2>Our recomendation</h2>
        <div>
          <Link
            to={{
              pathname: `/singlemeal`,
              state: {
                mealId: randomRecipe.idMeal,
                category: randomRecipe.strCategory
              }
            }}
          >
            <img
              src={randomRecipe.strMealThumb}
              alt={randomRecipe.strMeal}
            ></img>
          </Link>
          <h3>{randomRecipe.strMeal}</h3>
          <div>Category: {randomRecipe.strCategory}</div>
          <div>Country: {randomRecipe.strArea}</div>
        </div>
        <h2>Search Results</h2>
        <div>{listOfSearchRecipes}</div>
      </div>
    );
  }
}

export default Search;
