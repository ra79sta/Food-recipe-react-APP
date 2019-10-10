import React, { Component } from "react";

import Button from "../../components/Button/Button";

class LogIn extends Component {
  state = {
    eMail: "",
    password: "",
    isLogedIn: false
  };
  handleForm = e => {
    e.preventDefault();
    const { eMail, password } = this.state;
    localStorage.setItem("eMail", eMail);
    localStorage.setItem("password", password);
    localStorage.setItem("isLogedIn", true);
    this.setState({
      eMail: "",
      password: "",
      isLogedIn: true
    });
    this.props.getStateLog(true)
  };

  logOut = e => {
    e.preventDefault();
    localStorage.clear();
    this.setState({ isLogedIn: false });
    localStorage.setItem("isLogedIn", false);
    this.props.getStateLog(false)
  };

  valueOnchange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  componentDidMount = () => {
    const eMail = localStorage.getItem("eMail");
    const password = localStorage.getItem("password");
    eMail !== null && password !== null
      ? this.setState({ isLogedIn: true })
      : this.setState({ isLogedIn: false });
  };

  render() {
    console.log(this.state);
    return (
      <div className="contact">
        <form action="#">
          <input
            type="email"
            id="eMail"
            name="email"
            placeholder="Your email"
            value={this.state.eMail || ""}
            onChange={this.valueOnchange}
            required
          />
          <input
            type="password"
            id="password"
            placeholder="Your Password"
            name="password"
            value={this.state.password || ""}
            onChange={this.valueOnchange}
            required
          />
          <div className="subButton">
            <Button
              handleClick={
                !this.state.isLogedIn ? this.handleForm : this.logOut
              }
            >
              {this.state.isLogedIn ? "Logout" : "Login"}
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default LogIn;
