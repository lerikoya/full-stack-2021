import React, { useState } from "react";

const Statistics = (props) => {
  if (props.feedback === false) {
    return <div>No feedback given</div>;
  }
  return (
    <div>
      <StatisticLine name="good" number={props.good} />
      <StatisticLine name="neutral" number={props.neutral} />
      <StatisticLine name="bad" number={props.bad} />
      <StatisticLine name="all" number={props.all} />
      <StatisticLine name="average" number={props.average} />
      <StatisticLine name="positive" number={props.positive + "%"} />
    </div>
  );
};

const StatisticLine = (props) => {
  return (
    <div>
      {props.name} {props.number}
    </div>
  );
};

const Button = (props) => {
  return (
    <div>
      <button onClick={props.handleClick}> {props.text}</button>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [rate, setRate] = useState([]);
  const [isFeedback, setIsFeedback] = useState(false);

  const handleGoodClick = () => {
    setAll(all + 1);
    setGood(good + 1);
    setRate(rate.concat(1));
    setIsFeedback(true);
  };

  const handleNeutralClick = () => {
    setAll(all + 1);
    setNeutral(neutral + 1);
    setRate(rate.concat(0));
    setIsFeedback(true);
  };

  const handleBadClick = () => {
    setAll(all + 1);
    setBad(bad + 1);
    setRate(rate.concat(-1));
    setIsFeedback(true);
  };

  //https://stackoverflow.com/questions/29544371/finding-the-average-of-an-array-using-js
  const arrAvg = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;

  const positiveRate = (all, good) => (good * 100) / all;

  return (
    <div>
      <div>
        <h1>give feedback</h1>
        <Button handleClick={handleGoodClick} text="good" />
        <Button handleClick={handleNeutralClick} text="neutral" />
        <Button handleClick={handleBadClick} text="bad" />

        <h1>statistics</h1>
        {
          <Statistics
            feedback={isFeedback}
            good={good}
            neutral={neutral}
            bad={bad}
            all={all}
            average={arrAvg(rate)}
            positive={positiveRate(all, good)}
          />
        }
      </div>
    </div>
  );
};

export default App;
