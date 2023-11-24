import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCJOumxT9f23J22p99DJDQx35V8oOK1MZ0",
    authDomain: "agenda-a06d1.firebaseapp.com",
    projectId: "agenda-a06d1",
    storageBucket: "agenda-a06d1.appspot.com",
    messagingSenderId: "1063326455449",
    appId: "1:1063326455449:web:1a611decb35c0d2da58a08"
  };
  

  export const FIREBASE_APP = initializeApp(firebaseConfig);
  export const FIRESTORE_DB = getFirestore(FIREBASE_APP);

  export default firebase.initializeApp(firebaseConfig)
 
  