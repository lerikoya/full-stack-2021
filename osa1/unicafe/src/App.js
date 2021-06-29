import React, { useState } from "react";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [rate, setRate] = useState(0);

  const handleGoodClick = () => {
    setAll(all + 1);
    setGood(good + 1);
    setRate(rate + 1);
  };

  const handleNeutralClick = () => {
    setAll(all + 1);
    setNeutral(neutral + 1);
    setRate(rate + 0);
  };

  const handleBadClick = () => {
    setAll(all + 1);
    setBad(bad + 1);
    setRate(rate - 1);
  };

  return (
    <div>
      <div>
        <h1>give feedback</h1>
        <button onClick={handleGoodClick}>good</button>
        <button onClick={handleNeutralClick}>neutral</button>
        <button onClick={handleBadClick}>bad</button>
      </div>
      <div>
        <h1>statistics</h1>
        <p>
          good {good} <br></br> neutral {neutral} <br></br> bad {bad} <br></br>{" "}
          all {all} <br></br> average {rate / all} <br></br> positive {good * 100 / all}%
        </p>
      </div>
    </div>
  );
};

export default App;
