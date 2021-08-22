import React from "react";

function Hero({ heroName }) {
  if (heroName === "joker") {
    throw new Error("not a Hero");
  }
  return <div>{heroName}</div>;
}
// function Hero(props) {
//   if (props.heroName === "joker") {
//     throw new Error("not a Hero");
//   }
//   return <div>{props.heroName}</div>;
// }

export default Hero;
