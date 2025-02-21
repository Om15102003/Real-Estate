// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-a739a.firebaseapp.com",
  projectId: "real-estate-a739a",
  storageBucket: "real-estate-a739a.firebasestorage.app",
  messagingSenderId: "689538412860",
  appId: "1:689538412860:web:1e6ad9968b6586cb81ae39"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);