import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getAuth } from 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB19gADDIWcHA6njom8DMrpBzvo-0AkxCU",
  authDomain: "datn-dhbkhn.firebaseapp.com",
  databaseURL: "https://datn-dhbkhn-default-rtdb.firebaseio.com",
  projectId: "datn-dhbkhn",
  storageBucket: "datn-dhbkhn.appspot.com",
  messagingSenderId: "274502145784",
  appId: "1:274502145784:web:d3f42f1e07cb58ba464d0d",
  measurementId: "G-H9415BJH42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export  {app,auth};
