// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDhnyiJJLJLdOsUqtAWpEyWF7s6Pryso4Q",
    authDomain: "todaynews-8a17e.firebaseapp.com",
    projectId: "todaynews-8a17e",
    storageBucket: "todaynews-8a17e.appspot.com",
    messagingSenderId: "78905702037",
    appId: "1:78905702037:web:2bcdff5eba7cfac27e0d9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;