import firebase from "firebase";
//require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
  apiKey: "AIzaSyBudnzhPgr8p8j7Tyjzz-G_agad3aYupMw",
  authDomain: "pro-c71-e-ride-stage-4-25bdf.firebaseapp.com",
  projectId: "pro-c71-e-ride-stage-4-25bdf",
  storageBucket: "pro-c71-e-ride-stage-4-25bdf.appspot.com",
  messagingSenderId: "1036030274968",
  appId: "1:1036030274968:web:c641307e5d09603f9a0fed"
};

//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
