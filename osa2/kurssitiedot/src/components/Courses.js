import React from "react";

const SubHeader = (props) => {
  return (
    <div>
      <h3>{props.name}</h3>
    </div>
  );
};

const Total = ({ total }) => {
  const totalSum = total.parts.map((part) => part.exercises);
  return (
    <div>
      <p>
        <b>total of {totalSum.reduce((a, b) => a + b, 0)} exercises</b>
      </p>
    </div>
  );
};

const Content = ({ content }) => {
  return (
    <div>
      {content.parts.map((part) => (
        <Part key={part.id} content={part.name} exercises={part.exercises} />
      ))}
    </div>
  );
};

const Part = (props) => {
  return (
    <div>
      <p>
        {props.id} {props.content} {props.exercises}
      </p>
    </div>
  );
};

const Course = ({ course }) => {
  return (
    <div>
      <SubHeader name={course.name} />
      <Content content={course} />
      <Total total={course} />
    </div>
  );
};

export default Course;
