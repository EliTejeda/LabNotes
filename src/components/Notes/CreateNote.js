import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  IoAddCircleSharp, IoPencil, IoTrashBinSharp, IoCloseCircleSharp,
} from 'react-icons/io5';
import logoTitle from '../../assets/img/logoTitle.png';
import './CreateNote.css';

export default function NoteOne() {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/Home');
  };

  return (
    <section className="createNoteContainer">
      <nav className="menuTop">
        <img src={logoTitle} alt="logo_anota" width="200px" />
        <IoCloseCircleSharp
          type="submit"
          onClick={handleClose}
          size="3.3em"
        />
      </nav>
      <form className="writeAreaContainer">
        <input
          type="text"
          className="titleNote"
          placeholder="Title"
        />
        <textarea
          className="noteTextArea"
          placeholder="Write your note here"
          rows="30"
          cols="30"
        />
      </form>
      <footer className="menuBottom">
        <IoAddCircleSharp
          className="addNote"
          type="submit"
          size="2.4em"
        />
        <IoPencil type="submit" size="2.4em" />
        <IoTrashBinSharp type="submit" size="2.4em" />

      </footer>
    </section>
  );
}
