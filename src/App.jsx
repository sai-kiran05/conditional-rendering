import React, { useState } from "react";
import "./App.css";

function Message() {
  return (
    <div className="message-box">
      <h2>Hello! 👋</h2>
      <p>This is a conditionally rendered component.</p>
    </div>
  );
}

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="container">
      <h1 className="title">Conditional Rendering Example</h1>
      <button className="btn toggle" onClick={toggleVisibility}>
        {isVisible ? "Hide" : "Show"} Message
      </button>

      {/* Conditional Rendering */}
      {isVisible && <Message />}
    </div>
  );
}

export default App;
