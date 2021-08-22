import React from "react";

function Fragment2() {
  const items = [1, 2, 3, 4, 5];
  return (
    //we can pass the only key attribute to the React.Fragment element
    <React.Fragment>
      {items.map((item) => (
        <React.Fragment key={item.index}>
          {item}
          {item.index}
        </React.Fragment>
      ))}
    </React.Fragment>
  );
}

export default Fragment2;
