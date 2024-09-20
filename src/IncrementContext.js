import React, { createContext, useState } from "react";
import ChildA from "./ChildA";
import ChildB from "./ChildB";
import ChildC from "./ChildC";
import "./App.css";
//Create context object called CountContext
export const CountContext = createContext();

export default function IncrementContext() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    // passing the state variable (count) and handleIncrement function to increment the count
    <CountContext.Provider value={{ count, handleIncrement }}>
      <div className="App-header2">
        <h1>Increment Using Context</h1>
        <h2>Count in Parent: {count}</h2>
        {/* Child Components Subscribed to the Provider */}
        <ChildA />
        <ChildB />
        <ChildC />
      </div>
    </CountContext.Provider>
  );
}
