import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="false">
      My Favourite Foods
    </h1>
    <ul>
      <img
        className="woman-img"
        src="https://picsum.photos/200?grayscale"
        alt=""
      />
      <img
        className="woman-img"
        src="https://static5.depositphotos.com/1000824/455/i/450/depositphotos_4554044-stock-photo-glamour-portrait-sexy-woman-white.jpg"
        alt=""
      />
      <img
        className="woman-img"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOTQod9n-Lm-ymrucrthPr7yPgrCZ-Zi4JOQ&usqp=CAU"
        alt=""
      />
    </ul>
  </div>,
  document.getElementById("root")
);
