// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPYVi6PE8cWa6S60Z0Jeg5MYL2Nr9HRIE",
  authDomain: "disney-plus-clone-a7539.firebaseapp.com",
  projectId: "disney-plus-clone-a7539",
  storageBucket: "disney-plus-clone-a7539.appspot.com",
  messagingSenderId: "813576319612",
  appId: "1:813576319612:web:22d8b4eeecbaad186d4ff9",
  measurementId: "G-0HFEJVH8W0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);