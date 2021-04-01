import React from "react";

const Header = (props) => {
  return (
    <div>
      <p>
        <h1>{props.course}</h1>
      </p>
    </div>
  );
};

const Content = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.exerceses}
      </p>
    </div>
  );
};

const Total = (props) => {
  return (
    <div>
      <p>Number of exerceses {props.total}</p>
    </div>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content part={part1} exerceses={exercises1} />
      <Content part={part2} exerceses={exercises2} />
      <Content part={part3} exerceses={exercises3} />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

export default App;
