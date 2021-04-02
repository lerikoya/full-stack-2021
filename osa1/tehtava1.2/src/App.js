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

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  );
};

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.total}</p>
    </div>
  );
};

const Content = () => {
  return (
    <div>
      <Part part="Fundamentals of React" exercises={10} />
      <Part part="Using props to pass data" exercises={7} />
      <Part part="State of a component" exercises={14} />
    </div>
  );
};

const App = () => {
  const course = "Half Stack application development";
  // const part1 = "Fundamentals of React";
  // const exercises1 = 10;
  // const part2 = "Using props to pass data";
  // const exercises2 = 7;
  // const part3 = "State of a component";
  // const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total total={10 + 7 + 14} />
    </div>
  );
};

export default App;
