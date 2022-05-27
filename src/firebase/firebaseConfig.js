/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import {
  getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged,
} from 'firebase/auth';
import {
  addDoc, collection, getFirestore, serverTimestamp,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDgYexf_Ost9IDBjXjQxt29j2TUeMROoLs',
  authDomain: 'anota-30905.firebaseapp.com',
  projectId: 'anota-30905',
  storageBucket: 'anota-30905.appspot.com',
  messagingSenderId: '998588138475',
  appId: '1:998588138475:web:a0b3e27111c8948c294fae',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();

export const provider = new GoogleAuthProvider();

export const googleLogin = signInWithPopup;
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

/* FUNCION PARA GUARDAR NOTAS */
export const notes = (title, note) => {
  const user = auth.currentUser;
  const { uid } = user;
  addDoc(collection(db, 'notes'), {
    title,
    note,
    userID: uid,
    timestamp: serverTimestamp(),
  });
};
