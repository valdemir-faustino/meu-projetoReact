
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCZ9zjsssPj_RKHWs1gvWLzT8oc5TcpCBE",
    authDomain: "react-3f57f.firebaseapp.com",
    projectId: "react-3f57f",
    storageBucket: "react-3f57f.appspot.com",
    messagingSenderId: "524070225195",
    appId: "1:524070225195:web:23db581c8a267bb1fdf16e",    
    measurementId: "G-9SJQXHMYPL"    
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;
