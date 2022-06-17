import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  IoSave, IoCloseCircleSharp,
} from 'react-icons/io5';
import logoTitle from '../../assets/img/logoTitle.png';
import './CreateNote.css';
import { notes, updateNote } from '../../firebase/firebaseConfig';

// FUNCION PARA CREAR NOTAS
export default function CreateNote() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClose = () => {
    navigate('/Home');
  };

  const [noteTitle, setNoteTitle] = useState(location.state.noteTitle);
  const [noteText, setNoteText] = useState(location.state.noteContent);

  // FUNCION PARA AGREGAR NOTA CREADA Y ACTUALIZAR LA EDICION

  const handleAddNote = () => {
    if (location.state.noteId === 'noId') {
      notes(noteTitle, noteText);
    } else {
      updateNote(location.state.noteId, noteTitle, noteText);
    }
    navigate('/Home');
  };

  const Title = (event) => {
    setNoteTitle(event.target.value);
  };
  const Text = (event) => {
    setNoteText(event.target.value);
  };

  return (
    <section className="createNoteContainer">
      <nav className="menuTop">
        <img src={logoTitle} alt="logo_anota" width="200px" />
        <IoCloseCircleSharp type="submit" onClick={handleClose} size="3.3em" />
      </nav>
      <form className="writeAreaContainer">
        <input
          type="text"
          className="titleNote"
          placeholder="Title"
          defaultValue={location.state.noteTitle}
          onChange={Title}
        />
        <textarea
          className="noteTextArea"
          placeholder="Write your note here"
          rows="40"
          cols="40"
          defaultValue={location.state.noteContent}
          onChange={Text}
        />
      </form>
      <footer className="menuBottom">
        <IoSave
          className="addNote"
          type="submit"
          size="3.3em"
          onClick={handleAddNote}
        />
      </footer>
    </section>
  );
}
