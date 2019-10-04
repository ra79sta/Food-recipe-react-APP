import React from "react";

import Button from "../Button/Button";

import headerImage from "../../assets/Images/HEADER IMAGE.png";
import "./HomeHeader.css";

const homeHeader = props => (
  <div>
    <div className="header">
      <div className="headerText">
        <h1 className="food">Food Recipes</h1>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisi
          cras fermentum odio eu. Eu volutpat odij facilisis mauris sit. Justo
          laoreet sit amet cursus sit amet dictum sit. Pellentesque pulvinar
          pellentesque habitant morbo tristique senectus. Velit aliquet sagittis
          id consectetur purus
        </div>
        <div className="categoriesBtn">
          <Button handleClick={props.clickForCategories}>Categories</Button>
        </div>
      </div>
      <div className="headerImage">
        <img src={headerImage} alt="HeaderImage" />
      </div>
    </div>
  </div>
);

export default homeHeader;
