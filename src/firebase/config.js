// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkEw7L4G78Wt8mkv2ot5YhH2mO2tZ8tnA",
  authDomain: "proyecto-coderhouse-b0d73.firebaseapp.com",
  projectId: "proyecto-coderhouse-b0d73",
  storageBucket: "proyecto-coderhouse-b0d73.appspot.com",
  messagingSenderId: "382282848024",
  appId: "1:382282848024:web:ad58700b8d55e75814306d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)