import React from "react";

import logoImg from "../../assets/Images/LOGO.png";
import "./Logo.css";

const logo = props => (
  <div className="logo" style={{ height: props.height }}>
    <img src={logoImg} alt="Logo" />
  </div>
);

export default logo;
