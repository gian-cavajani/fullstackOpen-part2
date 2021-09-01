import React from "react";
import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Course = ({ course }) => {
  return (
    <div>
      {/* este map devuelve 2 objects, el de name:"half stack..."y el de name:"Node.js" */}
      {course.map((co) => {
        return (
          <div key={co.id}>
            <Header course={co.name} />
            <Content course={co.parts} />
            <Total parts={co.parts} />
          </div>
        );
      })}
    </div>
  );
};

export default Course;
