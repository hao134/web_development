import React from "react";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [inputItem, setInputItem] = useState({
    title: "",
    content: "",
  });
  const [isExpanded, setExpanded] = useState(false);

  function handleChange(event) {
    const { value, name } = event.target;

    setInputItem((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded ? (
          <input
            name="title"
            placeholder="Title"
            onChange={handleChange}
            value={inputItem.title}
          />
        ) : null}

        <textarea
          name="content"
          onClick={expand}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          onChange={handleChange}
          value={inputItem.content}
        />
        <Zoom in={isExpanded}>
          <Fab
            onClick={(event) => {
              props.onAdd(inputItem);
              setInputItem({ title: "", content: "" });

              event.preventDefault();
            }}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
