import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBdndUELttfTGlFb7FUc-ccdf2B0JudxH8",
  authDomain: "miniblog-dca7e.firebaseapp.com",
  projectId: "miniblog-dca7e",
  storageBucket: "miniblog-dca7e.appspot.com",
  messagingSenderId: "43553339364",
  appId: "1:43553339364:web:3f293e81402fbf0b07f9f1"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };