import React from "react";

//jsx

const Hello = () => {
  return (
    <div className="hello-Class">
      <h1>Hello JSX</h1>
    </div>
  );
};

//without using

// const Hello = () => {
//   return React.createElement("div", null, "h1", `Hello without JSX`);
//   return React.createElement(
//     "div",
//     { id: "hello", className: "helloClass" },
//     React.createElement("h1", null, "Hello without JSX")
//   );
// };

export default Hello;
