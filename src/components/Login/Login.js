/* eslint-disable no-console */
import './Login.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
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
        <img src={logoTitle} alt="logo_anota" width="400px" />
      </div>

      <div className="welcomeContainer">
        <h1>
          <em>Keep in mind, write it down...</em>
        </h1>
      </div>

      <div className="enterContainer">
        <h1> Log In </h1>
      </div>

      <form
        className="authContainer"
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <GoogleButton type="light" onClick={handleGoogle} />
      </form>

      <footer className="footerLogin">
        <p className="author">Eli Tejeda &copy; 2022</p>
      </footer>
    </section>
  );
}
export default Login;
