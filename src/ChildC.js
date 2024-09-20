import React, { useContext } from "react";
import { CountContext } from "./IncrementContext";

export default function ChildC(props) {
  const { count } = useContext(CountContext);
  return (
    <div>
      <h2>Count in Child C: {count}</h2>
    </div>
  );
}
