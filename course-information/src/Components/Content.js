import React from "react";

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
};

const Content = ({ course }) => {
  return (
    <div>
      {course.map((p) => {
        return <Part key={p.id} part={p} />;
      })}
    </div>
  );
};

export default Content;
