import React from "react";

function NameList2() {
  const names = ["king1", "king2", "king3", "king1"];
  const namesList = names.map((name, index) => (
    <h2 key={index}>
      Name is: {name},and index is: {index}
    </h2>
  ));
  return <div>{namesList}</div>;
}

export default NameList2;
