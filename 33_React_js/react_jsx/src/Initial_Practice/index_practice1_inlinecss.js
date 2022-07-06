import React from "react";
import ReactDOM from "react-dom/client";

const date = new Date();
const hours = date.getHours();
let greeting = "Hello";
const font_color = {
  color: "black",
};
if (hours >= 0 && hours < 12) {
  greeting = "Good morning";
  font_color.color = "red";
} else if (hours >= 12 && hours < 18) {
  greeting = "Good Afternoon";
  font_color.color = "green";
} else {
  greeting = "Good Night";
  font_color.color = "blue";
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      <h1 class="heading" style={font_color}>
        {greeting}
      </h1>
    </div>
  </React.StrictMode>
);
