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
  apiKey: 'AIzaSyBzwFu0RR8VXKAtU9XTOdqqv-gvppwSPEo',
  authDomain: 'anota2.firebaseapp.com',
  projectId: 'anota2',
  storageBucket: 'anota2.appspot.com',
  messagingSenderId: '457634601185',
  appId: '1:457634601185:web:3b7e1230674e5cebf7ffa0',
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
