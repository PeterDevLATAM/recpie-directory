import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCJrjZuGHNd2eAkrs1g4EN0OCXtFlGiiGw",
    authDomain: "recipe-directory-c8614.firebaseapp.com",
    projectId: "recipe-directory-c8614",
    storageBucket: "recipe-directory-c8614.appspot.com",
    messagingSenderId: "693467400876",
    appId: "1:693467400876:web:b22448811ef81cf9deed09"
  };

 // Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const firestoreDb = firebase.firestore();
