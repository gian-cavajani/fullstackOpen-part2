import React from "react";

const People = ({ names, remove }) => {
  return (
    <li>
      <button onClick={remove}>delete</button>
      <em>
        Name: {names.name}, Number: {names.number}
      </em>
    </li>
  );
};

export default People;
