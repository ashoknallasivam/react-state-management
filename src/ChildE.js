import React from "react";
import { useCounterStore } from "./store/zustandstore";

function ChildE() {
  // Using Zustand store hooks
  const counter = useCounterStore((state) => state.counter);
  return (
    <div>
      <h2>Count in Child C: {counter}</h2>
    </div>
  );
}

export default ChildE;
