import React from "react";

// inline styling is not specified as a string
// they are specified with the object who's key is like a css styles but in CamelCase
// we have to write all the css styles in camel case with the input as a string as shown in below

const styling = {
  fontSize: "72px",
  color: "red",
};

function InlineStyling() {
  return (
    <div>
      <h1 style={styling}>Inline Styling</h1>
    </div>
  );
}

export default InlineStyling;
