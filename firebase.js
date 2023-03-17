// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLKaaNZgU_k-9hP_K2pQvf7CGMmmoyMOk",
  authDomain: "dieparty-3706f.firebaseapp.com",
  projectId: "dieparty-3706f",
  storageBucket: "dieparty-3706f.appspot.com",
  messagingSenderId: "643460646893",
  appId: "1:643460646893:web:ae95b78f60bd48764c89e4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);
export { storage, db };
