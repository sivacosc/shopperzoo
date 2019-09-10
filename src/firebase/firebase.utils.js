import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC6MCCZBNhhxa3aJmQMi9di-rZtip4MOGc",
    authDomain: "shopperzoo.firebaseapp.com",
    databaseURL: "https://shopperzoo.firebaseio.com",
    projectId: "shopperzoo",
    storageBucket: "",
    messagingSenderId: "5438896526",
    appId: "1:5438896526:web:1ed0d45ddce739d66b4cdf"
  }

  firebase.initializeApp(config);
  
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

