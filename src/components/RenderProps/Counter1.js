import React, { Component } from "react";

class Counter1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  counterHandler = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };
  render() {
    //here we are using the render props method
    // we only define the state and counterHandler code here and we are using this code in to another two component
    return (
      //we pass the function as a props here so we have to use render keyword because we name the props as render
      // <div>{this.props.render(this.state.count, this.counterHandler)}</div>

      //we pass the function into the component so we have to use props.children
      //children gets all the elements between the component
      //anything within the components opening and closing tags will be passed as a children props
      <div>{this.props.children(this.state.count, this.counterHandler)}</div>
    );
  }
}

export default Counter1;
