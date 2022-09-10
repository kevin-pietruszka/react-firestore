// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAegu2ufdk9QBOtyabmVZJpHcIcchszG5I",
  authDomain: "programming-assignment-28e4d.firebaseapp.com",
  projectId: "programming-assignment-28e4d",
  storageBucket: "programming-assignment-28e4d.appspot.com",
  messagingSenderId: "288455964005",
  appId: "1:288455964005:web:5fe07ac766a8264ec75d8c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);