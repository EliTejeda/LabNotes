// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgYexf_Ost9IDBjXjQxt29j2TUeMROoLs",
  authDomain: "anota-30905.firebaseapp.com",
  projectId: "anota-30905",
  storageBucket: "anota-30905.appspot.com",
  messagingSenderId: "998588138475",
  appId: "1:998588138475:web:a0b3e27111c8948c294fae",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export const SignInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            const name = result.user.displayName;
            const email = result.user.email;
            const profilePicture = result.user.photoURL;

            localStorage.setItem('name', name)
            localStorage.setItem("email", email);
            localStorage.setItem("profilePicture", profilePicture);
        
        })
        .catch((error) => {
            console.log(error);
        });
};
