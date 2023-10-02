import firebase from 'firebase/app';
import 'firebase/database';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBuu-Sg2pkofpWw7BsMcNI_jfHphcjgMP0',
  authDomain: 'pizzaplace-a31d7.firebaseapp.com',
  projectId: 'pizzaplace-a31d7',
  storageBucket: 'pizzaplace-a31d7.appspot.com',
  messagingSenderId: '955547441592',
  appId: '1:955547441592:web:d0e0976a14b75dd391574d',
  measurementId: 'G-G8CB6DJGX8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
