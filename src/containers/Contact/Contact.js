import React, { Component } from "react";

import "./Contact.css";
import Button from "../../components/Button/Button";

class Contact extends Component {
  state = {
    fname: "",
    lname: "",
    email: "",
    message: "",
    mailSent: false,
    error: null
  };

  handleFormSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.setState({
      fname: "",
      lname: "",
      email: "",
      message: "",
      mailSent: true
    });
  };
  valueOnchange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    return (
      <div className="contact">
        <h2 className="contactHead">Contact</h2>
        <form action="#">
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="First Name"
            value={this.state.fname}
            onChange={this.valueOnchange}
          />
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Last Name"
            value={this.state.lname}
            onChange={this.valueOnchange}
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            value={this.state.email}
            onChange={this.valueOnchange}
          />
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            onChange={this.valueOnchange}
            value={this.state.message}
          ></textarea>
          <div className="subButton">
            <Button
              type="submit"
              handleClick={this.handleFormSubmit}
              value="Send"
            >
              Send
            </Button>
          </div>
          <div>
            {this.state.mailSent && 
            <div>Thank you for contcting us.
            </div>}
          </div>
        </form>
      </div>
    );
  }
}

export default Contact;
