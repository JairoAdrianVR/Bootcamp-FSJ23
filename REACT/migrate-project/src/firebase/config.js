// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  /*
    Your API CONFIGURATION FROM Firebase
  */

  apiKey: "AIzaSyA_eanKEK0sGXntsMIKKu-TwBnDjAq9HW4",
  authDomain: "autentificacion114.firebaseapp.com",
  projectId: "autentificacion114",
  storageBucket: "autentificacion114.appspot.com",
  messagingSenderId: "236988828841",
  appId: "1:236988828841:web:949bd755984ab316c66db8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
