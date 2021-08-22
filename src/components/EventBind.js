import React, { Component } from "react";

// don't use approact first and second if it is not so necessary
// you can use the third and fourth approach

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };

    //3 . third approach
    //event binding in constructor
    // this.clickHandler = this.clickHandler.bind(this);
  }

  //  for first three approach this fucntion is necessary

  //   clickHandler() {
  //     this.setState({
  //       message: "GoodBye",
  //     });
  //     console.log(this);
  //   }

  //4 . fourth Approach
  clickHandler = () => {
    this.setState({
      message: "GoodBye",
    });
    
  };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/*1 . first approach */}
        {/* binding event using bind() */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}

        {/*2 . second approach */}
        {/* binding event using arrow function */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}

        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default EventBind;
