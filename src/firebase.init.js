// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzLVq5-kvu26HWEjYnS-DyNVYWPnaA_4Y",
  authDomain: "ema-jhon-ecommerce-ed2ee.firebaseapp.com",
  projectId: "ema-jhon-ecommerce-ed2ee",
  storageBucket: "ema-jhon-ecommerce-ed2ee.appspot.com",
  messagingSenderId: "771023018893",
  appId: "1:771023018893:web:bf998e4f0b4aba7737bbc4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;