// passsing method as a argument from ParentComponent to ChildComponent

// we are called a method in the ParentComponent from a button from a ChildComponent by passing the method as a prop to the ChildComponent

//we are also passing the parameter from the childComponent to the parentComponent

//we are not directly importing the childComponent on the app.js file we are importing on ParentComponent through parentComponent we are using
// and the ParentComponent we are importing on the app.js

// Steps
// 1. In the parent Component define the method
// 2. import the childComponent and pass the method as a props
// 3. in the childComponent access the method using the props object if you want to send the parameters use the arrow fucntion syntax

import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "parent",
    };
    //Event Binding
    this.greetParent = this.greetParent.bind(this);
  }

  //   greetParent() {
  //     alert(`Hello ${this.state.parentName}`);
  //   }

  //passing the parameter from the child to parent
  greetParent(child) {
    alert(`Hello ${this.state.parentName} from ${child}`);
  }

  render() {
    return (
      <div>
        {/* we add the attribute to childComponent */}
        {/* we are passing a reference to the greetParent method as a prop called greetHandler */}
        <ChildComponent greetHandler={this.greetParent}></ChildComponent>
      </div>
    );
  }
}

export default ParentComponent;
