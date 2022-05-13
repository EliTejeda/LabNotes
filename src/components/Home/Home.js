import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoExitSharp } from 'react-icons/io5';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebaseConfig';

export default function Home() {
  const navigate = useNavigate();
  const handleLogOut = () => {
    signOut(auth)
      .then(() => navigate('/'))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div>Aqui van las notas</div>
      <button type="submit" onClick={handleLogOut}>Log Out</button>
    </>
  );
}
