import React from "react";
import ReactDOM from "react-dom";

const date = new Date();

console.log(date.getHours());

ReactDOM.render(
  <div>
    <h1>Hello World!</h1>
  </div>,
  document.getElementById("root")
);
