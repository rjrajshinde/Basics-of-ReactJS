import React from "react";

//we are fetching the data that comes with the "person" and we are displaying it
function Person({ person }) {
  return (
    <div>
      <h2>
        I am {person.name} and I am {person.age} years old.
      </h2>
    </div>
  );
}

export default Person;
