/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoExitSharp, IoAddCircleSharp } from 'react-icons/io5';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebaseConfig';
// import CreateNotes from '../Notes/CreateNotes';
// import NoteOne from '../Notes/NoteOne';
import logoTitle from '../../assets/img/logoTitle.png';
import './Home.css';

export default function Home() {
  /* const noteOne = { title: 'Pendientes', date: '20/05/2022', text: 'Que sirva esta vaina' };
  const noteTwo = { title: 'Chores', date: '19/05/2022', text: 'Sacar a pasear al perro' }; */
  const navigate = useNavigate();

  const handleLogOut = () => {
    signOut(auth)
      .then(() => navigate('/'))
      .catch((error) => console.log(error));
  };
  const handleAddNote = () => {
    navigate('/CreateNote');
  };

  const [listNotes, setListNotes] = useState([]);

  async function getResponse(url) {
    const response = await fetch(url);
    return response.json();
  }
  useEffect(() => {
    getResponse('https://629a9781656cea05fc2bb733.mockapi.io/anota/Notas').then(
      (json) => setListNotes(json),
    );
  }, []);
  console.log(listNotes);

  return (
    <section className="homeContainer">
      <nav className="menuTop">
        <img src={logoTitle} alt="logo_anota" width="200px" />
        <IoExitSharp type="submit" onClick={handleLogOut} size="4.3em" />
      </nav>
      <section className="notesContainer">
        {listNotes.map((notes) => (
          <div className="boxNotes" key={notes.id}>
            <h1>{notes.title }</h1>
          </div>
        ))}
      </section>

      <footer className="menuBottom">
        <IoAddCircleSharp
          className="addNote"
          type="submit"
          onClick={handleAddNote}
          size="4.3em"
        />
      </footer>
    </section>

  /* <NoteOne props={noteOne} />
      <NoteOne props={noteTwo} /> */
  );
}
