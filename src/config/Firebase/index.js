import firebase from "firebase";

firebase.initializeApp ({
    apiKey: "AIzaSyCu2Uyx7nDcn8-4H2pN_wWXRhSyViTSdA0",
    authDomain: "mydoctormr.firebaseapp.com",
    databaseURL: "https://mydoctormr.firebaseio.com",
    projectId: "mydoctormr",
    storageBucket: "mydoctormr.appspot.com",
    messagingSenderId: "262909848473",
    appId: "1:262909848473:web:7c0905830ab35855500108"
  });

  const Firebase = firebase;

  export default Firebase;