import React from "react";

function NameList() {
  const names = ["king", "joker", "yoyo"];
  const nameList = names.map((name) => <h2>{name}</h2>);

  const persons = [
    { id: 1, name: "raj", age: 12 },
    { id: 2, name: "om", age: 22 },
    { id: 3, name: "yo", age: 14 },
  ];
  const personList = persons.map((person) => (
    <h2>
      I am {person.name}. my Id is {person.id}. and I am {person.age} years old.
    </h2>
  ));

  return (
    <div>
      <div>{nameList}</div>
      <div>{personList}</div>
    </div>
    // <div>
    //   {names.map((name) => (
    //     <h2>{name}</h2>
    //   ))}
    // </div>

    // <div>
    //   <h2>{names[0]}</h2>
    //   <h2>{names[1]}</h2>
    //   <h2>{names[2]}</h2>
    // </div>
  );
}

export default NameList;
