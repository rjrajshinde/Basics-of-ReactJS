//here we are accepting the alert funciton as an props from ParentComponent to this component

// we are called a method in the ParentComponent from a button from a ChildComponent by passing the method as a prop to the ChildComponent

// Steps
// 1. In the parent Component define the method
// 2. import the childComponent and pass the method as a props
// 3. in the childComponent access the method using the props object if you want to send the parameters use the arrow fucntion syntax

import React from "react";

function ChildComponent(props) {
  return (
    <div>
      {/* <button onClick={props.greetHandler}>Greet Parent</button> */}
      {/* here we are sending the parameter to the parentComponent 'child' */}
      <button onClick={() => props.greetHandler("child")}>Greet Parent</button>
    </div>
  );
}

export default ChildComponent;
