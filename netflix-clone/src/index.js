import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SearchButton from './SearchButton';
import firebase from 'firebase/compat/app';

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

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
