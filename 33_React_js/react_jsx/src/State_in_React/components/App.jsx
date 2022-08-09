import React from "react";

var isDone = false;

function strike() {
  isDone = true;
}

function unstrike() {
  isDone = false;
}

function App() {
  return (
    <div>
      <p>Buy milk</p>
      <button onClick={strike}>Change to strike thorugh</button>
      <button onClick={unstrike}>Change back</button>
    </div>
  );
}

export default App;
