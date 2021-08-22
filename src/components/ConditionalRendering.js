import React, { Component } from "react";

class ConditionalRendering extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    // 1. if-else method
    // if (this.state.isLoggedIn) {
    //   return <div>Hello True</div>;
    // } else {
    //   return <div>Hello False</div>;
    // }
    // 2. javascript variables
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Hello True</div>;
    // } else {
    //   message = <div>Hello False</div>;
    // }
    // return <div>{message}</div>;
    // 3. ternaery operator
    // return this.state.isLoggedIn ? (
    //   <div>Hello True</div>
    // ) : (
    //   <div>Hello False</div>
    // );
    // 4. short circuit operator
    return this.state.isLoggedIn && <div>Hello True</div>;
  }
}

export default ConditionalRendering;
