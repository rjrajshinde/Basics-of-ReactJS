import React, { Component } from "react";
import withCounter from "./withCounter";

class HoverCounter extends Component {
  render() {
    //here we are destructuring and using the functions and states as an props through the higherComponent
    const { count, incrementCount } = this.props;
    return (
      <div>
        <h3 onMouseOver={incrementCount}>
          {this.props.name} Hovered {count} times
        </h3>
      </div>
    );
  }
}

//Here we Export it using the Higher Component withCounter as we passing the HoverCounter component as an argument to the UpdateComponent
export default withCounter(HoverCounter, 10);
