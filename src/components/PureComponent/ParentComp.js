import React, { Component, PureComponent } from "react";
import RegularComp from "./RegularComp";
import PureComp from "./PureComp";
import MemoComp from "./MemoComp";

//here we extends the parentComp with regular component
class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "raj",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "raj",
      });
    }, 2000);
  }

  render() {
    console.log(
      "------------------------Parent Component render---------------------------"
    );
    return (
      <div>
        Parent Component
        {/* <MemoComp name={this.state.name}></MemoComp> */}
        <RegularComp name={this.state.name}></RegularComp>
        {/* <PureComp name={this.state.name}></PureComp> */}
      </div>
    );
  }
}

//here we are extending ParentComp with PureComponent
//so here parentComp checks the state name to updated state name but it did not change then it does not render when setInterval after 2 seconds
// class ParentComp extends PureComponent {
//   constructor(props) {
//     super(props);

//     this.state = {
//       name: "raj",
//     };
//   }

//   componentDidMount() {
//     setInterval(() => {
//       this.setState({
//         name: "raj",
//       });
//     }, 2000);
//   }

//   render() {
//     console.log(
//       "------------------------Parent Component render---------------------------"
//     );
//     return (
//       <div>
//         Parent Component
//         <RegularComp name={this.state.name}></RegularComp>
//         <PureComp name={this.state.name}></PureComp>
//       </div>
//     );
//   }
// }

export default ParentComp;
