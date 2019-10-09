import React, {Component} from "react";
import axios from "axios";


class MyMeal extends Component {
    state = {
        myMeals: [],
        error: false
    }

    // componentDidMount = () => {
    //     axios.get(``)
    //     .then(response =>{
    //         this.setState({myMeals: response.date.meals})
    //     })
    //     .catch(error => {
    //         this.setState({ error: true });
    //         console.log(error);
    //       });
    // }


    render() {
        return (
            <div>Konj</div>
        )
    }
}

export default MyMeal;