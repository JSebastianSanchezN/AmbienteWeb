import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1ZwT-7aAYCKl-fF_VxQvj18qTZqP1hKE",
  authDomain: "pance-tour.firebaseapp.com",
  projectId: "pance-tour",
  storageBucket: "pance-tour.appspot.com",
  messagingSenderId: "1032017085164",
  appId: "1:1032017085164:web:c4470c2a6432d6e1ac9bc9"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth()
const firebaseStorage = getStorage(firebaseApp);

export {firebaseApp, auth, firebaseStorage}