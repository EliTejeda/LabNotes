/* eslint-disable no-console */
import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdDeleteForever } from 'react-icons/md';
import { notes } from '../../firebase/firebaseConfig';

export default function CreateNotes() {
  const onNavigate = useNavigate();
  /* const user = auth.currentUser; */

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const handleAddNote = () => {
    console.log(title);
    console.log(text);

    notes(title, text);
    onNavigate('/Home');
  };

  const titleValue = (event) => {
    setTitle(event.target.value);
  };

  const textValue = (event) => {
    setText(event.target.value);
  };

  const handleNavHome = () => {
    onNavigate('/Home');
  };

  return (
    <>
      <div className="note"> Aqui se crean todas las notas </div>
      <span>My first note</span>
      <div className="note-footer" />
      <small>18/05/2022</small>
      <MdDeleteForever className="delete-icon" size="5em" />

    </>
  );
}
