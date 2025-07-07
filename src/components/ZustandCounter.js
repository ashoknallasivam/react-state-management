//src/components/ZustandCounter.js
import React from "react";
import { useCounterStore } from "../store/zustandstore";
import ChildE from "../ChildE";

const ZustandCounter = () => {
  // Using Zustand store hooks
  const incrementAsync = useCounterStore((state) => state.incrementAsync);
  const decrementAsync = useCounterStore((state) => state.decrementAsync);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);

  return (
    <div className="App-header6">
      <h1>Increment Decrement Using Zustand</h1>
      <ChildE />
      <button className="button" onClick={increment}>
        Increment
      </button>
      <button className="button" onClick={decrement}>
        Decrement
      </button>
      <button className="button" onClick={incrementAsync}>
        Increment Async
      </button>
      <button className="button" onClick={decrementAsync}>
        Decrement Async
      </button>
    </div>
  );
};

export default ZustandCounter;
