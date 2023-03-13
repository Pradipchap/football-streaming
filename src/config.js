// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJqGNHU-dw1XHRG7w-8nIa206WO-Wq4Zc",
  authDomain: "hellp-57d11.firebaseapp.com",
  projectId: "hellp-57d11",
  storageBucket: "hellp-57d11.appspot.com",
  messagingSenderId: "416142513585",
  appId: "1:416142513585:web:60a1f24cf77a3b3f5e5990",
  measurementId: "G-8JVF25VZ8T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();