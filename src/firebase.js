
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDOHtapUkThaJMdFKPMgC-BiHW1Dwl2RmQ",
  authDomain: "projeto-nuvens.firebaseapp.com",
  projectId: "projeto-nuvens",
  storageBucket: "projeto-nuvens.appspot.com",
  messagingSenderId: "1055650552133",
  appId: "1:1055650552133:web:be265e439e034f1cad062c",
  measurementId: "G-1EBFBT7S1H"  
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;
