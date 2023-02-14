
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA47q265FGHkG-tPMveEvatNCvESMntsVw",
    authDomain: "anu--clone.firebaseapp.com",
    projectId: "anu--clone",
    storageBucket: "anu--clone.appspot.com",
    messagingSenderId: "286849021286",
    appId: "1:286849021286:web:7643e8be4fb779f78c04a7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export {db, auth};