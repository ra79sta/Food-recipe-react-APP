import React, { Component } from "react";
import axios from "axios";

import "./SingleMeal.css";

class SingleMeal extends Component {
  state = {
    activeRecipe: [],
    ingrediants: [],
    mesure: [],
    similarIdRecipe: [],
    similarRecipe: [],
    categoryRecipes: []
  };

  componentDidMount = () => {
    const mealId = this.props.location.state.mealId;
    const category = this.props.location.state.category;
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
      .then(response => {
        this.setState({ activeRecipe: response.data.meals[0] });

        const recipe = this.state.activeRecipe;

        const resultIngrid = Object.keys(recipe).reduce((resultIngrid, key) => {
          if (key.includes("strIngredient")) {
            resultIngrid[key] = recipe[key];
          }
          return resultIngrid;
        }, {});
        this.setState({ ingrediants: resultIngrid });

        const resultMes = Object.keys(recipe).reduce((resultMes, key) => {
          if (key.includes("strMeasure")) {
            resultMes[key] = recipe[key];
          }
          return resultMes;
        }, {});
        this.setState({ mesure: resultMes });

        axios
          .get(
            `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
          )
          .then(response => {
            this.setState({ categoryRecipes: response.data.meals });
          })
          .then(() => {
            this.randomRecepies();
            this.state.similarIdRecipe.map(async simId => {
              const response = await axios.get(
                `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${simId}`
              );
              this.setState({
                similarRecipe: this.state.similarRecipe.concat(
                  response.data.meals
                )
              });
            });
          })
          .catch(error => {
            this.setState({ error: true });
            console.log(error);
          });
      })
      .catch(error => {
        this.setState({ error: true });
        console.log(error);
      });
  };

  randomRecepies = () => {
    const arrayOfSimularRecipes = this.state.categoryRecipes;
    const threeRandom = arrayOfSimularRecipes.sort(() => 0.5 - Math.random());
    let randomSelected = threeRandom.slice(0, 3);
    
    const randomSelelectedRecipe = randomSelected.map(simular => {
      return simular.idMeal;
    });
    return this.setState({ similarIdRecipe: randomSelelectedRecipe });
  };

  render() {
    const recipe = this.state.activeRecipe;
    const listOfIngediants = Object.values(this.state.ingrediants);
    const listOfMesure = Object.values(this.state.mesure);
    const ingrediants = listOfIngediants.map((ingrediant, i) => {
      if (ingrediant !== "" && ingrediant !== " " && ingrediant !== null) {
        return (
          <ul key={i}>
            <li>{ingrediant}</li>
          </ul>
        );
      }
    });

    const mesurments = listOfMesure.map((mesure, i) => {
      if (mesure !== " " && mesure !== "" && mesure !== null) {
        return (
          <ul key={i}>
            <li>{mesure}</li>
          </ul>
        );
      }
    });

    const randomRecipes = this.state.similarRecipe.map(similar => {
      return (
        <div key={similar.idMeal} className="col-md-4 randomRecipes">
          <img src={similar.strMealThumb} alt={similar.strMeal}></img>
          <h3>{similar.strMeal}</h3>
          <div>Category: {similar.strCategory}</div>
          <div>Country: {similar.strArea}</div>
        </div>
      );
    });
    return (
      <div className="container">
        <h1>{recipe.strMeal}</h1>
        <div>#{recipe.strTags}</div>
        <div>Country: {recipe.strArea}</div>
        <div>Category: {recipe.strCategory}</div>
        <div>{recipe.strInstructions}</div>
        <div>
          Video:{" "}
          <a href={recipe.strYoutube} target="_blank" rel="noopener noreferrer">
            {recipe.strYoutube}
          </a>
        </div>
        <img src={recipe.strMealThumb} alt={recipe.strMeal}></img>
        <div>
          <div>
            <h4>Ingredients</h4>
            {ingrediants}
          </div>
          <div>
            <h4>Mesurments</h4>
            {mesurments}
          </div>
        </div>
        <h3>Similar Meals</h3>
        <hr width="100%" size="8" align="center" color="black"></hr>
        <div className="row">{randomRecipes}</div>
      </div>
    );
  }
}

export default SingleMeal;
