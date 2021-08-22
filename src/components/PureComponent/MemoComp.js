import React from "react";

function MemoComp({ name }) {
  console.log("render from memo component");
  return <div>{name}</div>;
}
//using the React Memo we can avoid the re-rendering if there is no change in the state or props like we did using pure component.
//pure component checks the previous state or props and compare with the updated state or props and only re-render when there is change in between them
export default React.memo(MemoComp);
