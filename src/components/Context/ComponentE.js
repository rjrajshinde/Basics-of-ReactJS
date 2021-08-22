import React, { Component } from "react";
import ComponentF from "./ComponentF";
import UserContext from "./userContext";

//we can't use the {contextType} in the functional component
//and we can't pass more than one context in the {contextType}

export class ComponentE extends Component {
  //if the application supports the public classfield syntax then
  // we can use the static keyword to access the UserContext
  static contextType = UserContext;

  render() {
    return (
      <div>
        Component E context using contextType {this.context}
        <ComponentF />
      </div>
    );
  }
}

// //we use the UserContext for the contextType that way we can use the value from the User Provider with the help of the {this.context}
// // Component.contextType = UserContext;

export default ComponentE;
