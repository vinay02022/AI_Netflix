// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAas759ApHSXFfuy_fYkMLLrVdf5l_w5Ug",
  authDomain: "netflix-gpt-6dcff.firebaseapp.com",
  projectId: "netflix-gpt-6dcff",
  storageBucket: "netflix-gpt-6dcff.appspot.com",
  messagingSenderId: "513821161369",
  appId: "1:513821161369:web:09fbcdfba9d6ae96d78508",
  measurementId: "G-7WSFJ2EGYX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);