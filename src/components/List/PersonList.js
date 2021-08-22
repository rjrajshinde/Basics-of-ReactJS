import React, { Component } from "react";
import Person from "./Person";

// we are showing the list on the web page with the help of another Component "Person"

function PersonList() {
  const persons = [
    { id: 1, name: "raj", age: 12 },
    { id: 2, name: "om", age: 22 },
    { id: 3, name: "yo", age: 14 },
  ];
  //here we import the "person" component and assign the person from map as an argument
  const personList = persons.map((person) => (
    <Person key={person.id} person={person}></Person>
  ));
  return <div>{personList}</div>;
}

export default PersonList;
