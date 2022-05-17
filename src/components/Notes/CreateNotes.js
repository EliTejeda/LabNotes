/* eslint-disable no-console */
import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { notes } from '../../firebase/firebaseConfig';

export default function NoteView() {
  const onNavigate = useNavigate();
  /*const user = auth.currentUser;*/

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
    <div> Aqui se crean todas las notas </div>
  );
}
