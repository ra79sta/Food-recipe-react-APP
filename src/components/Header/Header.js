import React from "react";

import "./Header.css";
import NavigationItems from "../Navigation/NavigationItems/NavigationItems";
import SearchBar from "../SreachBar/SearchBar";

const header = props => (
  <header className="toolbar">
    <div className="searchBarRecipe">
      <SearchBar submitHandler={props.getRecipe}>Search by first letter</SearchBar>
    </div>
    <nav>
      <NavigationItems />
    </nav>
  </header>
);

export default header;
