// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcn4GYQ4GphYfA57F0QfoYDaQaH0ZlG2E",
  authDomain: "bicycle-parts-manufactur-2b48a.firebaseapp.com",
  projectId: "bicycle-parts-manufactur-2b48a",
  storageBucket: "bicycle-parts-manufactur-2b48a.appspot.com",
  messagingSenderId: "759016072626",
  appId: "1:759016072626:web:7defe53ad8200b478c70ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;