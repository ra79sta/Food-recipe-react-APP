import React from "react";

import "./CategoriesList.css";
import { Link } from "react-router-dom";

const categoriesList = props => (
  <div className="container">
    <div className="row">
      {props.categories.map(category => {
        return (
          <div key={category.idCategory} className="col-md-4 categoryItem">
            <Link
              to={{
                pathname: `/category`,
                state: { categoryName: category.strCategory }
              }}
            >
              <img
                src={category.strCategoryThumb}
                alt={category.strCategory}
              ></img>
            </Link>

            <h3>{category.strCategory}</h3>
          </div>
        );
      })}
    </div>
  </div>
);

export default categoriesList;
