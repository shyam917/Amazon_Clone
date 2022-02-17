import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDqaEL7R4TAmkcGW4Yen5SLoRGXWwAhrzw",
    authDomain: "clone-4dd6c.firebaseapp.com",
    projectId: "clone-4dd6c",
    storageBucket: "clone-4dd6c.appspot.com",
    messagingSenderId: "729392659621",
    appId: "1:729392659621:web:a2c1ca4bcab9b02f22e14c",
    measurementId: "G-L72LTJ2Q7B"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };