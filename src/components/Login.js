import "./Home.css";
import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignInWithGoogle } from "../firebase/firebaseConfig";

import GoogleButton from "react-google-button";

export function Login() {
  return (
    <>
      <img
        className="logo_anota"
        src={require("../assets/logo_anota.png")}
        alt="logo_anota"
      />
      <h1> Log In </h1>

      <form>
        <div>
          <GoogleButton type="light" onClick={SignInWithGoogle}></GoogleButton>
        </div>
      </form>

      <img src={localStorage.getItem("profilePicture")} />
      <h1>{localStorage.getItem("name")}</h1>
      <h2>{localStorage.getItem("email")}</h2>
    </>
  );
}
