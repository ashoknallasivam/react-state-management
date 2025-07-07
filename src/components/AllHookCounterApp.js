//src/components/SampleCode.js
import { useState, useEffect, useRef, useMemo, useCallback } from "react";

const AllHookCounterApp = () => {
  const [count, setCount] = useState(0); // useState for counter
  const [name, setName] = useState(""); // useState for input text
  const inputRef = useRef(null); // useRef to focus input

  // useEffect to focus input when component mounts
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // useMemo to calculate double count only when count changes
  const doubleCount = useMemo(() => {
    console.log("Calculating double...");
    return count * 2;
  }, [count]);

  // useCallback to handle increment function
  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Hello {name || "Guest"} 👋</h2>

      <input
        ref={inputRef}
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <div style={{ marginTop: "20px" }}>
        <p>Count: {count}</p>
        <p>Double Count (memoized): {doubleCount}</p>
        <button onClick={increment}>Increment</button>
      </div>
    </div>
  );
};

export default AllHookCounterApp;
