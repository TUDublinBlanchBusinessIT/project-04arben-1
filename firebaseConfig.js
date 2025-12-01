// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABUxzBgiXRIos_y3NTDNkj7khTfe6FB3I",
  authDomain: "cinestarapp-7574d.firebaseapp.com",
  projectId: "cinestarapp-7574d",
  storageBucket: "cinestarapp-7574d.firebasestorage.app",
  messagingSenderId: "898287946030",
  appId: "1:898287946030:web:bc111ef9c3f559a38612bf",
  measurementId: "G-E1SWD01RJ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);