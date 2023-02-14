import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  
  function handleInputChange(evt) {
    const {name, value} = evt.target;
    setNote(prevNote => {
      return {
        ...prevNote, 
        [name]: value
      }
    })
  }

  function submitNewNote(evt) {
    evt.preventDefault();
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
  }

  return (
    <div className="form-container">
      <form className="create-note">
        <input 
          name="title" 
          onChange={handleInputChange}
          value={note.title} 
          placeholder="Title"
          />
        <textarea 
          name="content" 
          onChange={handleInputChange}
          value={note.content} 
          placeholder="My note..." 
          rows="3"
          />
        <button onClick={submitNewNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
