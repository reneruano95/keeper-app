import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  
  const [isExpanded, setIsExpanded] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function expanded() {
    setIsExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        { isExpanded ? <input
          value={note.title}
          onChange={handleChange}
          name="title"
          placeholder="Title"
        /> : null}
        <textarea
          value={note.content}
          onClick={setIsExpanded}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={(event) => {
            props.onAdd(note);
            event.preventDefault();
            setNote({
              title: "",
              content: ""
            });
          }} >
          <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
