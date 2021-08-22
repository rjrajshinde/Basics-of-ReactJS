import { auto } from "async";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Child from "./Child";
import Child2 from "./Child2";
// import "./css.css";
const element = document.getElementById("modal-root");
const buttonStyle = {
  padding: ".5em 2em",
  borderRadius: "1em",
  border: "1px solid",
  letterSpacing: "2px",
};

class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      click: 0,
    };
  }

  // clickHandler() {
  //   this.setState({
  //     click: this.state.click + 1,
  //   });
  // }

  clickHandler() {
    this.setState((prev) => ({
      click: prev.click + 1,
    }));
  }

  render() {
    return ReactDOM.createPortal(
      <div style={{ textAlign: "center" }}>
        {/* <Child click={this.state.click}></Child> */}
        <Child2 click={this.state.click}></Child2>
        {/* <h1>{this.state.click}</h1> */}
        <button onClick={() => this.clickHandler()} style={buttonStyle}>
          CLICK
        </button>
      </div>,
      element
    );
  }
}

export default Parent;
