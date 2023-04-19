import { useState } from "react";
import AddNote from "./AddNote";
import { FaTrashAlt } from "react-icons/fa";

const Content = () => {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notesList')) || []);
  const [search, setSearch] = useState('');

  const handleDelete = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    localStorage.setItem("notesList", JSON.stringify(updatedNotes));
  };

  const addNote = (newNote) => {
    const id = notes.length ? notes[notes.length - 1].id + 1 : 1;
    const myNewNote = { id, note: newNote };
    const updatedNotes = [...notes, myNewNote];
    setNotes(updatedNotes);
    localStorage.setItem("notesList", JSON.stringify(updatedNotes));
  };

  const filteredNotes = notes.filter((note) =>
    note.note.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="Content">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search notes"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="maincontent">
      <div className="addnoteroot">
        <AddNote addItem={addNote} />
      </div>
      
      {filteredNotes.length ? (
        <div className="Notes">
          {filteredNotes.map((note) => (
            <div className="Note" key={note.id}>
              <p>{note.note}</p>
              <div className="FaTrashDiv">
                <div className="FaTrashDiv2">
                  <FaTrashAlt
                    onClick={() => handleDelete(note.id)}
                    className="FaTrashAlt"
                    role="button"
                    tabIndex="0"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="empty">Your Book is empty</p>
      )}
      </div>
    </div>
  );
};

export default Content;

  
