import React from "react";

function ToDoItem(props) {
  //   const [isDone, setIsDone] = useState(false);

  // like switch
  //   function handleClick() {
  //     setIsDone((prevValue) => {
  //       return !prevValue;
  //     });
  //   }

  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}
export default ToDoItem;
