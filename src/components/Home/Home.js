/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoExitSharp, IoAddCircleSharp } from 'react-icons/io5';
import { signOut } from 'firebase/auth';
import {
  collection, query, orderBy, getDocs,
} from 'firebase/firestore';
import { auth, db } from '../../firebase/firebaseConfig';
import logoTitle from '../../assets/img/logoTitle.png';
import './Home.css';

export default function Home() {
  const navigate = useNavigate();

  const handleLogOut = () => {
    signOut(auth)
      .then(() => navigate('/'))
      .catch((error) => console.log(error));
  };
  const handleAddNote = () => {
    navigate('/CreateNote');
  };

  const [NotesList, setNotesList] = useState([]);

  // FORMULA PARA RENDERIZAR NOTAS
  // 1.Obtener la info de firebase
  // 1.1 Obtener id de cada documento
  // 2 Que devuelva el id de cada documento
  // 2.1 Renderizado de cada documento con su informacion
  const getNoteList = async () => {
    const userId = auth.currentUser;
    const { uid } = userId;
    const arrayNotesList = [];
    const q = query(collection(db, 'notes'), orderBy('date', 'desc'));

    const post = await getDocs(q);
    console.log(post);

    post.forEach((doc) => {
      if (doc.data().userId === uid) {
        arrayNotesList.push({ ...doc.data(), id: doc.id });
      }
    });
    setNotesList(arrayNotesList);
  };
  // RENDERIZADO DE NOTAS
  useEffect(() => {
    getNoteList();
  }, []);

  // 2.2 Crear grid de notas

  return (
    <section className="homeContainer">
      <nav className="menuTop">
        <img src={logoTitle} alt="logo_anota" width="200px" />
        <IoExitSharp type="submit" onClick={handleLogOut} size="4.3em" />
      </nav>
      <section className="notesContainer">
        {NotesList.map((notes) => (
          <div className="boxNotes" key={notes.id}>
            <div className="notesTitle">
              {notes.title}
              <p className="notesText">
                {' '}
                {notes.text}
              </p>
            </div>
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
  );
}
