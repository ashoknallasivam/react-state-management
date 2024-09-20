import React from "react";
import "./App.css";

/* Example for Lifting state from Child to Parent using call back function */
import Increment from "./Increment";
/* Example for Lifting state from Child to Parent using context function */
import IncrementContext from "./IncrementContext";
/* Example for Lifting state from Child to Parent using Only Redux (React-Redux Toolkit) */
import Counter from "./components/Counter";
import UserData from "./components/UserData";
import LikeButton from "./components/LikeButton";
/* Example for Creating a Blog using Redux Saga */
export default function App() {
  return (
    <div>
      <Increment />
      <IncrementContext />
      <Counter />
      <UserData />
      <LikeButton />
    </div>
  );
}

() => {};
