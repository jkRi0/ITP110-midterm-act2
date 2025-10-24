import React, { useState } from "react";

function Home() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  return (
    <div className="page">
      <h1>Welcome to the Home Page</h1>

      <div className="card">
        <h2>Reactive Counter</h2>
        <p>Count: <strong>{count}</strong></p>
        <div className="btn-group">
          <button onClick={() => setCount(count + 1)}>Increase</button>
          <button onClick={() => setCount(count - 1)}>Decrease</button>
          <button onClick={() => setCount(0)}>Reset</button>
        </div>
      </div>

      <div className="card">
        <h2>Two-Way Data Binding</h2>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>Hello, {name || "Guest"}!</p>
      </div>
    </div>
  );
}

export default Home;
