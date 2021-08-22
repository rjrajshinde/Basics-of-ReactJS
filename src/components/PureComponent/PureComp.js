import React, { PureComponent } from "react";

class PureComp extends PureComponent {
  render() {
    console.log("Pure component render ");
    //here the pure component checks the previous prop name raj to updated prop name raj when we update it in setTimeInterval() but it doesn't change so it does not re-render again as you can see in the console
    return <div>Pure Component {this.props.name}</div>;
  }
}

export default PureComp;
