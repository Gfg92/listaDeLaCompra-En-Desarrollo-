// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyU3jzSRNA3IKlLeDEUzi12L2VGPLJj2o",
  authDomain: "mis-articulos-e6b35.firebaseapp.com",
  databaseURL: "https://mis-articulos-e6b35-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mis-articulos-e6b35",
  storageBucket: "mis-articulos-e6b35.appspot.com",
  messagingSenderId: "155030266657",
  appId: "1:155030266657:web:7725cf0c5ef2c6640f9460",
  measurementId: "G-V4QS6VYQYB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);