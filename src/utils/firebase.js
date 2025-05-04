// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDj9ycmC-uSQR4zVY-B0rQ3jy83Ql7bnag",
  authDomain: "netflix-gpt-7b0ab.firebaseapp.com",
  projectId: "netflix-gpt-7b0ab",
  storageBucket: "netflix-gpt-7b0ab.firebasestorage.app",
  messagingSenderId: "759057393241",
  appId: "1:759057393241:web:7d7f7229a03c89937cf348",
  measurementId: "G-6JPBGV0FYJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();