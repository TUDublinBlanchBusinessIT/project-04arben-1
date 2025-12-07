
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyABUxzBgiXRIos_y3NTDNkj7khTfe6FB3I",
  authDomain: "cinestarapp-7574d.firebaseapp.com",
  projectId: "cinestarapp-7574d",
  storageBucket: "cinestarapp-7574d.firebasestorage.app",
  messagingSenderId: "898287946030",
  appId: "1:898287946030:web:bc111ef9c3f559a38612bf",
  measurementId: "G-E1SWD01RJ5"
};


const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);


export const db = getFirestore(app);  
