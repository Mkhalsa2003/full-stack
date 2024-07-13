import { useState } from "react";

const App1 = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const all = good + neutral + bad;

  return (
    <>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="Bad" />
      <h1>statistics</h1>

      {good || neutral || bad ? (
        <>
          <tr>
            <Display name={"good"} numb={good} />
          </tr>
          <tr>
            <Display name={"neutral"} numb={neutral} />
          </tr>
          <tr>
            <Display name={"bad"} numb={bad} />
          </tr>
          <tr>all {all}</tr>
          <Statistics good={good} bad={bad} all={all} />
        </>
      ) : (
        <p>No feedback given</p>
      )}
    </>
  );
};
const Statistics = (props) => {
  const avg = props.good + props.bad * -1;
  const pos = props.good / props.all;
  return (
    <>
      <tr>average {avg} </tr>
      <tr>positive {pos}</tr>
    </>
  );
};
const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};
const Display = (props) => {
  return (
    <>
      <td>{props.name}</td>
      <td>{props.numb}</td>
    </>
  );
};
export default App1;
