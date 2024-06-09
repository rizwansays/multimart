

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNz3711e06lRYQrt3hOdc1pNXJ_FHDFoo",
  authDomain: "maltimart-3542a.firebaseapp.com",
  projectId: "maltimart-3542a",
  storageBucket: "maltimart-3542a.appspot.com",
  messagingSenderId: "326279225449",
  appId: "1:326279225449:web:fbe1f70f5a665dffb682f8",
  measurementId: "G-TKPS2M496V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;