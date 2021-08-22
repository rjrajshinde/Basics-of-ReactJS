import React, { Component } from "react";

class RegularComp extends Component {
  render() {
    console.log("Regular component render");
    //but the regular component does not check this previous props to updated props so it render when the parent component renders when setInterval after every 2 seconds
    return <div>Regular Component {this.props.name}</div>;
  }
}

export default RegularComp;
