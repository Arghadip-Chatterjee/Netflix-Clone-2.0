import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCLRdaXQDgp-KbcWDZQav1h3Tef-kRMxJA",
    authDomain: "technoverse-netflix.firebaseapp.com",
    projectId: "technoverse-netflix",
    storageBucket: "technoverse-netflix.appspot.com",
    messagingSenderId: "608145522553",
    appId: "1:608145522553:web:8853fe68cff1d6d091f9a8",
    measurementId: "G-L6LVE8XZYT"
  };

  const app = firebase.initializeApp(firebaseConfig);
  const auth = app.auth();
  
  export { auth };