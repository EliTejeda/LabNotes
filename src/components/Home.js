import "./Home.css";
import React, { Fragment, useState } from "react";
import { SignInWithGoogle } from "../firebase/firebaseConfig";

export function Home() {
  return (
    <>
      <img
        className="logo_anota"
        src={require("../assets/logo_anota.png")}
        alt="logo_anota"
      />
      <h1> Log In </h1>
      <input type="text" placeholder="Email"></input>
      <input type="text" placeholder="Password"></input>
      <button> Sign In</button>
      <h2> You haven’t any account? Sign Up </h2>
      <h2> or </h2>
      <button
        type="button"
        className="login-with-google-btn"
        onClick={SignInWithGoogle}
      >
        {" "}
        Sign In with Google{" "}
      </button>
      <img src={localStorage.getItem("profilePicture")} />
      <h1>{localStorage.getItem("name")}</h1>
      <h2>{localStorage.getItem("email")}</h2>
    </>
  );
}
