import React, { useState, useEffect } from "react";

const SetTimeOutExample = () => {
  const [message, setMessage] = useState("Waiting...");

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage("⏰ Time's up!");
    }, 3000); // 3 seconds

    return () => clearTimeout(timer); // Cleanup if component unmounts
  }, []);

  return <h3>{message}</h3>;
};

export default SetTimeOutExample;
