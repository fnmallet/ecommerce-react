// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBNbAIWTKeOio1R_bYlxK6nGhkqsof5W8E",
    authDomain: "smartech-4cba2.firebaseapp.com",
    projectId: "smartech-4cba2",
    storageBucket: "smartech-4cba2.appspot.com",
    messagingSenderId: "52199111239",
    appId: "1:52199111239:web:8c03ce43fca25d2a86cf62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export function getFirebase() {
    return app;
}