
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyATExMUkZqf8B3zXWMEzROUpi6GfZUO_Vw",
  authDomain: "portfolio-javier-lekker.firebaseapp.com",
  projectId: "portfolio-javier-lekker",
  storageBucket: "portfolio-javier-lekker.appspot.com",
  messagingSenderId: "690599842926",
  appId: "1:690599842926:web:c26c506ac6e56ac09f027f",
  measurementId: "G-X92GHZ4KH3"
};


const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app)