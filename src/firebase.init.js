import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDTNr-P-EypDH3yb5pC_TwswBxvJl7zvDk",
    authDomain: "assignment11-client-side.firebaseapp.com",
    projectId: "assignment11-client-side",
    storageBucket: "assignment11-client-side.appspot.com",
    messagingSenderId: "959070171463",
    appId: "1:959070171463:web:a66a475ca839c2400b9c62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;                                                                                                                                                                                                                    