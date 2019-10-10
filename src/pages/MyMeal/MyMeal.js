import React, {Component} from "react";
import axios from "axios";


class MyMeal extends Component {
    state = {
        myMeals: [],
        randomMealsArray: [52772, 52819, 52812, 52850, 52830, 52813, 52955, 52911],
        error: false
    }

    componentDidMount = () => {
        this.state.randomMealsArray.map(async idMeal => {
            const response = await axios.get(
              `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
            );
            this.setState({
              myMeals: this.state.myMeals.concat(
                response.data.meals
              )
            })
          })
    }


    render() {
        const myMeals = this.state.myMeals.map(mymeal => {
            return (
              <div key={mymeal.idMeal}>
                <img src={mymeal.strMealThumb} alt={mymeal.strMeal}></img>
                <h3>{mymeal.strMeal}</h3>
                <div>Category: {mymeal.strCategory}</div>
                <div>Country: {mymeal.strArea}</div>
              </div>
            );
          });
        console.log(this.state.myMeals)
        return (
            <div>{myMeals}</div>
        )
    }
}

export default MyMeal;