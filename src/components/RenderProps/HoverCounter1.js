import React, { Component } from "react";

class HoverCounter1 extends Component {
  render() {
    const { count, counterHandler } = this.props;
    return <h3 onMouseOver={counterHandler}>Hovered {count} times</h3>;
  }
}

export default HoverCounter1;
