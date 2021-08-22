import React, { Component } from "react";

class ClickCounter1 extends Component {
  render() {
    const { count, counterHandler } = this.props;
    return <button onClick={counterHandler}>Click {count} times</button>;
  }
}

export default ClickCounter1;
