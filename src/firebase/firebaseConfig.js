import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup,onAuthStateChanged} from "firebase/auth";
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

const provider = new GoogleAuthProvider();

export const SignInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePicture = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePicture", profilePicture);
    })
    .catch((error) => {
      console.log(error);
    });
};

// HOOK USEAUTH... Este hook sirve para mantener autenticada la aplicacion
export function useAuth() {
    const [currentUser, setCurrentUser] = useState();

const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => setCurrentUser(user));
        if (!unsubscribe) {
            navigate('/Login');
        }
        return unsubscribe;
    }); 
    return currentUser;
}