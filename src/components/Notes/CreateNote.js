import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  IoSave, IoTrashBinSharp, IoCloseCircleSharp,
} from 'react-icons/io5';
import { AiFillEdit } from 'react-icons/ai';
import logoTitle from '../../assets/img/logoTitle.png';
import './CreateNote.css';
import { notes } from '../../firebase/firebaseConfig';

export default function CreateNote() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClose = () => {
    navigate('/Home');
  };

  // const user = auth.currentUser;
  const [noteTitle, setNoteTitle] = useState('');
  const [noteText, setNoteText] = useState('');

  const handleAddNote = () => {
    console.log(noteTitle);
    console.log(noteText);

    notes(noteTitle, noteText);
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
          size="2.4em"
          onClick={handleAddNote}
        />
        <AiFillEdit type="submit" size="2.4em" />
        <IoTrashBinSharp type="submit" size="2.4em" />
      </footer>
    </section>
  );
}
