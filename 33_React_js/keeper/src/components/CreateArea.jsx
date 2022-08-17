import React from "react";
import { useState } from "react";

function CreateArea(props) {
  const [inputItem, setInputItem] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { value, name } = event.target;

    setInputItem((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={inputItem.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleChange}
          value={inputItem.content}
        />
        <button
          onClick={(event) => {
            props.onAdd(inputItem);
            setInputItem({ title: "", content: "" });

            event.preventDefault();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
