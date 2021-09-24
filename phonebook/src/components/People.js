import React from "react";

const People = ({ names, remove }) => {
  return (
    <li>
      <span>Name:</span> {names.name}, <span>Number:</span> {names.number}
      <button onClick={remove}>delete</button>
    </li>
  );
};

export default People;
