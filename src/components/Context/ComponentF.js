import React, { Component } from "react";
import { UserConsumer } from "./userContext";

// export class ComponentF extends Component {
//   render() {
//     return (
//       <UserConsumer>
//         {(username) => {
//           return <div>Hello {username} from Component F</div>;
//         }}
//       </UserConsumer>
//     );
//   }
// }

// export default ComponentF;

function ComponentF() {
  return (
    <div>
      <UserConsumer>
        {(username) => {
          return <div>Hello {username} from Component F</div>;
        }}
      </UserConsumer>
    </div>
  );
}

export default ComponentF;
