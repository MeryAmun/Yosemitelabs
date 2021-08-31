import  firebase from 'firebase/app';
require('firebase/firestore');

const firebaseConfig = {
    apiKey: "AIzaSyCLA6oav1DP00tXxnh9f_IQ7-Fc8aLm_zU",
    authDomain: "pokemon-292d0.firebaseapp.com",
    projectId: "pokemon-292d0",
    storageBucket: "pokemon-292d0.appspot.com",
    messagingSenderId: "268476204778",
    appId: "1:268476204778:web:3ed5c64e423c5d8e11f993",
    measurementId: "G-117Q7FFLR5"
  };
  
  // Initialize Firebase
 
  firebase.initializeApp(firebaseConfig);
  //firebase.firestore().settings({ timestampsInSnapshots: true });
  const db = firebase.firestore();
  export default  db;