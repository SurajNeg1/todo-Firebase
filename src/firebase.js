import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCkaR-WAHVMohMAoirB7iBqsbdx3F1OU2E",
    authDomain: "todolist-b30f7.firebaseapp.com",
    databaseURL: "https://todolist-b30f7.firebaseio.com",
    projectId: "todolist-b30f7",
    storageBucket: "todolist-b30f7.appspot.com",
    messagingSenderId: "944140160180",
    appId: "1:944140160180:web:b7e41ae590c4608adc9be1",
    measurementId: "G-RHERJLEVVB"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export  {db};