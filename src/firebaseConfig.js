// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAgtfFRhzOZX5uXjf_ga_Lon16WNXGFEs4",
    authDomain: "campusties.firebaseapp.com",
    projectId: "campusties",
    storageBucket: "campusties.firebasestorage.app",
    messagingSenderId: "165303948634",
    appId: "1:165303948634:web:757805860150ea6a414f63"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)