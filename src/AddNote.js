import { FaPlus } from "react-icons/fa";
import { useState } from "react";

const AddNote = ({ Notes, addItem }) => {
  const [newNote, setNewNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newNote) return;
    addItem(newNote);
    setNewNote("");
  };

  return (
    <form className="addnoteform" onSubmit={handleSubmit}>
      <label htmlFor="add-note"></label>

      <textarea
        placeholder="Add a note"
        autoFocus
        required
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
      ></textarea>
      <button 
        type="submit"
      >
        <FaPlus className="plus" />
      </button>
    </form>
  );
};

export default AddNote;

