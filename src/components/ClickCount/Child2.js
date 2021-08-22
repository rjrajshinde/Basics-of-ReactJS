import React from "react";
import ReactDOM from "react-dom";
const element = document.getElementById("portal-root");

function Child2(props) {
  return ReactDOM.createPortal(
    <React.Fragment>
      <h1
        style={{
          textAlign: "center",
          fontWeight: 200,
        }}
      >
        You have click this {props.click} time
      </h1>
    </React.Fragment>,
    element
  );
}

export default Child2;
