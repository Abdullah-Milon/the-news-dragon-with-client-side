// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbryMyGeKoywe0hNNHQcyR9ld7nUvqyUc",
  authDomain: "the-news-dragon-ddd4c.firebaseapp.com",
  projectId: "the-news-dragon-ddd4c",
  storageBucket: "the-news-dragon-ddd4c.appspot.com",
  messagingSenderId: "805230628113",
  appId: "1:805230628113:web:921508b901b29a5c2190b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;