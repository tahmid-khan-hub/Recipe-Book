// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1c13JIBYN7AllxgFPeKG83m-Azi9TQTw",
  authDomain: "recipe-book-app-1da9f.firebaseapp.com",
  projectId: "recipe-book-app-1da9f",
  storageBucket: "recipe-book-app-1da9f.firebasestorage.app",
  messagingSenderId: "586333191973",
  appId: "1:586333191973:web:ec7549d2fca11fb7c7e4cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);