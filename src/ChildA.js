import React, { useContext } from "react";
import { CountContext } from "./IncrementContext";

export default function ChildA(props) {
  const { handleIncrement } = useContext(CountContext);
  return (
    <div>
      <h2>Button to Increment count in Child A</h2>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}
