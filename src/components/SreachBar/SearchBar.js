import React from "react";

import "./SearchBar.css";

import Button from "../Button/Button";

const searchBar = props => (
  <form onSubmit={props.getRecipe}>
    <div className="input-group">
      <input
        className="form-control"
        type="text"
        name="searchValue"
        placeholder={props.children}
      />
      <span className="input-group-btn buttonSearch">
        <Button>Search</Button>
      </span>
    </div>
  </form>
);

export default searchBar;
