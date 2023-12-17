
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDKlLRtAGwTTV70lgal7-UgRlflcErperM",
  authDomain: "portfolio-4082f.firebaseapp.com",
  projectId: "portfolio-4082f",
  storageBucket: "portfolio-4082f.appspot.com",
  messagingSenderId: "905945822184",
  appId: "1:905945822184:web:006d090e985cc474012a5d",
  measurementId: "G-MPBE31W7YT"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);
