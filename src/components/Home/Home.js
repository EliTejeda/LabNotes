import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoExitSharp, IoAddCircleSharp } from 'react-icons/io5';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebaseConfig';

export default function Home() {
  const navigate = useNavigate();
  const handleLogOut = () => {
    signOut(auth)
      .then(() => navigate('/'))
      .catch((error) => console.log(error));
  };
  const handleAddNote = () => {
    navigate('/NoteView');
  };

  return (
    <>
      <div>Aqui van las notas</div>
      <IoExitSharp type="submit" onClick={handleLogOut} size="4.3em" />
      <IoAddCircleSharp type="submit" onClick={handleAddNote} size="4.3em" />
    </>
  );
}
