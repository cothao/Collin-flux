// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWAE5o2oXFtu1R1wi3km_57LKeJqk5beo",
  authDomain: "netflix-react-a3600.firebaseapp.com",
  projectId: "netflix-react-a3600",
  storageBucket: "netflix-react-a3600.appspot.com",
  messagingSenderId: "894520290798",
  appId: "1:894520290798:web:92f0a8fe4aa87ecf9d32ff",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
