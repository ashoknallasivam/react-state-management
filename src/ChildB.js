import React, { useContext } from "react";
import { CountContext } from "./IncrementContext";

export default function ChildB(props) {
  const { count } = useContext(CountContext);
  return (
    <div>
      <h2>Count in Child B: {count}</h2>
    </div>
  );
}
