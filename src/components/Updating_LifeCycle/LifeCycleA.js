import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Raj",
    };
    console.log("LifeCycleA constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleA getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifeCycleA componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("LifeCycleA shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifeCycleA getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("LifeCycleA componentDidUpdate");
  }

  changeName = () => {
    this.setState({
      name: "king",
    });
  };

  render() {
    console.log("LifeCycleA render");
    return (
      <div>
        LifeCycle A <br />
        <button onClick={this.changeName}>Change</button>
        <h1>{this.state.name}</h1>
        <LifeCycleB></LifeCycleB>
      </div>
    );
  }
}

export default LifeCycleA;
