// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsp68XscrlaVT5K3iyOmf8n0OeXfGnE74",
  authDomain: "netflixgpt-be380.firebaseapp.com",
  projectId: "netflixgpt-be380",
  storageBucket: "netflixgpt-be380.firebasestorage.app",
  messagingSenderId: "997711398835",
  appId: "1:997711398835:web:466fd53002d744ff8b2dc6",
  measurementId: "G-EM6DQ81WWY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();