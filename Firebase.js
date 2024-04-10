// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMxA6Ktz9NOezOc_VjW7JBi5pthoFYklM",
  authDomain: "portfolio-b3e6a.firebaseapp.com",
  projectId: "portfolio-b3e6a",
  storageBucket: "portfolio-b3e6a.appspot.com",
  messagingSenderId: "201475250378",
  appId: "1:201475250378:web:24b26a3c37473f5ce47c33",
  measurementId: "G-51133ZJNBN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);