// state

import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome Brother",
    };
  }

  changeMessage() {
    this.setState({
      message: "Thank You Brother",
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Submit</button>
      </div>
    );
  }
}

export default Message;
