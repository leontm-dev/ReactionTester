// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIvOi2X6ikdp4sXwPYUeiVLCoR1f3NCXo",
  authDomain: "reactiontester-app.firebaseapp.com",
  projectId: "reactiontester-app",
  storageBucket: "reactiontester-app.appspot.com",
  messagingSenderId: "175467036978",
  appId: "1:175467036978:web:2fbd2ddf04d0df67f2972b",
  measurementId: "G-9WQ0350WDF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
