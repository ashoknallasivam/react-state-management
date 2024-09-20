import React, { useState } from "react";
import "./App.css";

/* Child Component A for the button onlick event calls the call back function from parent 
to increment the count
*/
function ChildA(props) {
  const { onIncrement } = props;
  return (
    <div>
      <h2>Button to Increment count in Child A</h2>
      <button onClick={onIncrement}>Increment</button>
    </div>
  );
}

/* Child Component B use the count which is updated in the parent and passed as props
 */
function ChildB(props) {
  const { count } = props;
  return (
    <div>
      <h2>Count in Child B: {count}</h2>
    </div>
  );
}

/* This is the Parent component which hold the call back function to increment the count
 */
export default function Increment() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  return (
    <div className="App-header">
      <h1>Increment Using Callback Function</h1>
      <h2>Count in Parent: {count}</h2>
      <ChildA onIncrement={handleIncrement} />
      <ChildB count={count} />
    </div>
  );
}
