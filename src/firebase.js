// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBE0Q5eDPRaL90Vc-GWX-SR9x601AjrCd4",
  authDomain: "student-agency-962c9.firebaseapp.com",
  projectId: "student-agency-962c9",
  storageBucket: "student-agency-962c9.firebasestorage.app",
  messagingSenderId: "190595316942",
  appId: "1:190595316942:web:7eea27839f5956ccb8a49f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);