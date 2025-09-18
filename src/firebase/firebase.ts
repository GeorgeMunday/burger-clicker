// Import the functions you need from the SDKs you need
import { initializeApp, FirebaseApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

//web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCScFLa12Qd5Vxx2LYbinPdaQME-fjtAGc",
  authDomain: "idle-game-a9789.firebaseapp.com",
  projectId: "idle-game-a9789",
  storageBucket: "idle-game-a9789.firebasestorage.app",
  messagingSenderId: "981664749940",
  appId: "1:981664749940:web:0c12ca450508e984347421",
  measurementId: "G-TKTDCHSXW8",
};

const app: FirebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db };
