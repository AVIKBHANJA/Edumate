import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDxzqghox1M0GIrUt8TMSOSr9NAfBLygzk",
  authDomain: "edumate-9a934.firebaseapp.com",
  projectId: "edumate-9a934",
  storageBucket: "edumate-9a934.appspot.com",
  messagingSenderId: "173307678777",
  appId: "1:173307678777:web:6b614823299be95267fde8",
  measurementId: "G-X00983CZ84"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);