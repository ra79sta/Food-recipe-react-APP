import React, { Component } from "react";

import Button from "../../components/Button/Button";

class LogIn extends Component {
  state = {
    eMail: "",
    password: ""
  };
  handleFormSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.setState({
        eMail: "",
        password: ""
    })
  };

  valueOnchange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    return (
    <div className="contact">
      <form action="#">
        <input
            type="email"
            id="eMail"
            name="email"
            placeholder="Your email"
            value={this.state.eMail}
            onChange={this.valueOnchange}
          />
        <input
          type="password"
          id="password"
          placeholder="Your Password"
          name="password"
          value={this.state.password}
          onChange={this.valueOnchange}
          required
        />
        <div className="subButton">
        <Button handleClick={this.handleFormSubmit}>Login</Button>
        </div>
      </form>
      </div>
    );
  }
}

export default LogIn;
