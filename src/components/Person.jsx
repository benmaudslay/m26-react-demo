import React from "react";
import { Pet } from "./Pet";

export const Person = (props) => {
  // props = { name, petName, type }
  return (
    <div>
      <h1>hi my name is {props.name}</h1>
      <Pet name={props.petName} type={props.type} />
    </div>
  );
};


