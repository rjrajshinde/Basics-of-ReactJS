import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increament() {
    //changing the state without the setState()
    // this.state.count = this.state.count + 1;

    //changing the state with the setState()
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log("Callback value=", this.state.count);
    //   }
    // );

    this.setState((previousState) => ({
      count: previousState.count + 1,
    }));
    console.log(this.state.count);
  }

  increamentFive() {
    this.increament();
    this.increament();
    this.increament();
    this.increament();
    this.increament();
  }

  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.increamentFive()}>ADD</button>
      </div>
    );
  }
}

export default Counter;
