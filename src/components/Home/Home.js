/* eslint-disable no-console */
/* eslint-disable react/prop-types */
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

  const getNoteList = async () => {
    const userID = auth.currentUser;
    const { uid } = userID;
    const arrayNotesList = [];
    const q = query(collection(db, 'notes'), orderBy('timestamp', 'desc'));

    const post = await getDocs(q);
    console.log(post);

    post.forEach((doc) => {
      if (doc.data().userID === uid) {
        arrayNotesList.push({ ...doc.data(), id: doc.id });
      }
    });
    setNotesList(arrayNotesList);
  };
  // useEffect sirve para que renderice por primera vez
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
                {notes.note}
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
