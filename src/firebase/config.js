import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDDoP2BWo0mBO_xWCMRzNotTrplvty0X2o",
    authDomain: "olx-clone-c55e1.firebaseapp.com",
    projectId: "olx-clone-c55e1",
    storageBucket: "olx-clone-c55e1.appspot.com",
    messagingSenderId: "853738381481",
    appId: "1:853738381481:web:699f0a86dfb2d4ce4c49b8",
    measurementId: "G-S0B3XDKQRW"
  };

export default firebase.initializeApp(firebaseConfig)