import React from "react";
import "./style.css";

function Component(prop) {
  let className = prop.primary ? "primary" : "";
  return (
    <div>
      {/* simple styling with regular stylesheet */}
      {/* <h1 className="primary">Styling</h1> */}

      {/* styling with props and variables with conditions */}
      <h1 className={className}>Simple Styling</h1>

      {/* template literals for adding one or more classes */}
      <h2 className={`${className} font-xl`}>Styling with template literals</h2>
    </div>
  );
}

export default Component;
