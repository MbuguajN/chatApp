// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { initializeFirestore } from 'firebase/firestore';// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBixKOh6uL4152cGuuxVk-qoN3xrgGGns0",
  authDomain: "chatapp-f3a63.firebaseapp.com",
  projectId: "chatapp-f3a63",
  storageBucket: "chatapp-f3a63.appspot.com",
  messagingSenderId: "558914466831",
  appId: "1:558914466831:web:70c429eadd70e7f7fddf7a",
  measurementId: "G-60D435NS1M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = initializeFirestore(app, {experimentalForceLongPolling: true});
const analytics = getAnalytics(app);

export { db, auth };
