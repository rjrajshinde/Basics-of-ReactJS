import React, { Component } from "react";
import withCounter from "./withCounter";

class ClickCounter extends Component {
  render() {
    //here we are destructuring and using the function and states as an props throught the higherComponent
    const { count, incrementCount } = this.props;
    return (
      <button
        onClick={incrementCount}
        style={{
          padding: ".5em 2em",
          marginTop: "10px",
          borderRadius: "15px",
        }}
      >
        {this.props.name} Clicked {count} times
      </button>
    );
  }
}

//Here we Export it using the Higher Component withCounter as we passing the ClickCounter component as an argument to the UpdateComponent
export default withCounter(ClickCounter, 5);
