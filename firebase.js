import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCYdPZ2M_854Q6M2tCqoh5EC-dSFalGnSs",
  authDomain: "react-notes-19762.firebaseapp.com",
  projectId: "react-notes-19762",
  storageBucket: "react-notes-19762.firebasestorage.app",
  messagingSenderId: "948182279172",
  appId: "1:948182279172:web:b7f229d24402c2b8278151"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
