import React from "react";

import "./Button.css";

const button = props => (
  <button onClick={props.handleClick} className="button">
    {props.children}
  </button>
);

export default button;
