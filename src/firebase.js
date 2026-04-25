// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3VzPHPMB-o0BCydYwro0fYXr-l8ZvJ6c",
  authDomain: "portfilo-a6f18.firebaseapp.com",
  projectId: "portfilo-a6f18",
  storageBucket: "portfilo-a6f18.firebasestorage.app",
  messagingSenderId: "939350842312",
  appId: "1:939350842312:web:69a9ca7c93227eba107efd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);