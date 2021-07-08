import React from "react";

const Header = (props) => {
  // console.log(props);
  return (
    <div>
      <h1>{props.name}</h1>
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

const Total = ({ total }) => {
  console.log(total);

  const totalSum = total.parts.map((part) => part.exercises);
  console.log(totalSum);

  return (
    <div>
      <p>
        <b>total of {totalSum.reduce((a, b) => a + b, 0)} exercises</b>
      </p>
    </div>
  );
};

const Content = ({ content }) => {
  //console.log(content);
  return (
    <div>
      {content.parts.map((part) => (
        <Part key={part.id} content={part.name} exercises={part.exercises} />
      ))}
    </div>
  );
};

const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      <Content content={course} />
      <Total total={course} />
    </div>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    id: 1,
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
      {
        name: "Redux",
        exercises: 11,
        id: 4,
      },
    ],
  };



  // console.log('%cApp.js line:94 object', 'color: #007acc;');

  return (
    <div>
      {/* <Header course={course} />
      <Content course={course} />
      <Total course={course} /> */}
      <Course course={course} />
    </div>
  );
};

export default App;
