/* eslint-disable no-console */
import './Login.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import GoogleButton from 'react-google-button';
import { signOut } from 'firebase/auth';
import { googleLogin, auth, provider } from '../firebase/firebaseConfig';

function Login() {
  const navigate = useNavigate();

  const handleGoogle = async (app) => {
    console.log(app);
    await googleLogin(auth, provider).then((isAuth) => {
      navigate('/Home');
      console.log(isAuth);
    });
  };

  const handleLogOut = () => {
    signOut(auth)
      .then(() => navigate('/'))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <img
        className="logo_anota"
        src="../assets/logo_anota.png"
        alt="logo_anota"
      />
      <h1> Log In </h1>

      <form>
        <div>
          <GoogleButton type="light" onClick={handleGoogle} />
          <button type="submit" onClick={handleLogOut}>Log Out</button>
        </div>
      </form>
    </>
  );
}
export default Login;
