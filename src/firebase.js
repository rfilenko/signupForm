import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Firebase configuration
var firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: "signupform-a6b68.firebaseapp.com",
  databaseURL: "https://signupform-a6b68.firebaseio.com",
  projectId: "signupform-a6b68",
  storageBucket: "signupform-a6b68.appspot.com",
  messagingSenderId: "111101596354",
  appId: "1:111101596354:web:7a888824539fedf177215b",
  measurementId: "G-7GNQCDPZBM"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
