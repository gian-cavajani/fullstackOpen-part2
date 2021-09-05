import React from "react";

const People = ({ names }) => {
  return (
    <article>
      <h2>Numbers</h2>
      {names.map((p) => {
        return (
          <p key={p.id}>
            <em>
              Name: {p.name}, Number: {p.number}
            </em>
          </p>
        );
      })}
    </article>
  );
};

export default People;
