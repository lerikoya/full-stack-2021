import React from "react";

const SubHeader = (props) => {
  // console.log(props);
  return (
    <div>
      <h3>{props.name}</h3>
    </div>
  );
};

const Header = (props) => {
  return (
    <div>
      <h2>Web development curriculum</h2>
    </div>
  );
};

const Part = (props) => {
  console.log(props);

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
  console.log(content);
  return (
    <div>
      {content.parts.map((part) => (
        <Part key={part.id} content={part.name} exercises={part.exercises} />
      ))}
    </div>
  );
};

const Course = ({ course }) => {
  console.log(course);
  return (
    <div>
      <SubHeader name={course.name} />
      <Content content={course} />
      <Total total={course} />
    </div>
  );
};

const App = () => {
  const courses = [
    {
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
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  const coursesList = courses.map((course) => (
    <Course key={course.id} course={course} />
  ));

  // console.log('%cApp.js line:94 object', 'color: #007acc;');

  return (
    <div>
      {/* <Header course={course} />
      <Content course={course} />
      <Total course={course} /> */}
      <Header />
      {coursesList}
    </div>
  );
};

export default App;
