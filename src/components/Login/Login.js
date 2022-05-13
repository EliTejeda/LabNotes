/* eslint-disable no-console */
import './Login.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import GoogleButton from 'react-google-button';
import logoTitle from '../assets/img/logoTitle.png';
import { googleLogin, auth, provider } from '../../firebase/firebaseConfig';

function Login() {
  const navigate = useNavigate();

  const handleGoogle = async (app) => {
    console.log(app);
    await googleLogin(auth, provider).then((isAuth) => {
      navigate('/Home');
      console.log(isAuth);
    });
  };

  return (
    <>
      <img
        src={logoTitle}
        alt="logo_anota"
      />
      <h1> Log In </h1>

      <form>
        <div>
          <GoogleButton type="light" onClick={handleGoogle} />

        </div>
      </form>
    </>
  );
}
export default Login;
