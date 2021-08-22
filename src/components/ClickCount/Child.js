import React from "react";

function child(props) {
  return (
    <div>
      <h1>This is the {props.click} time you have click the button</h1>
    </div>
  );
}

export default child;
