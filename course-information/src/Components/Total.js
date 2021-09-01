import React from "react";

const Total = ({ parts }) => {
  //   console.log("parts", parts);
  const sum = parts.reduce((s, part) => {
    return s + part.exercises;
  }, 0);
  //   console.log("sum", sum);
  return (
    <p>
      <strong>Number of exercises {sum}</strong>
    </p>
  );
};

export default Total;
