/* eslint-disable no-console */
import './Login.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Grid from "@mui/material/Grid";
import GoogleButton from 'react-google-button';
import logoTitle from '../../assets/img/logoTitle.png';
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
    <section className="loginContainer">
      <div className="imgContainer">
        <img src={logoTitle} alt="logo_anota" />
      </div>
      <div className="welcomeContainer">
        <h1> Log In </h1>
      </div>
      <form className="authContainer">
        <GoogleButton type="light" onClick={handleGoogle} />
      </form>
    </section>
  );
}
export default Login;
