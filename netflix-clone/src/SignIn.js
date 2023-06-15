import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import './SignIn.css';

const SignIn = () => {
  const navigate= useNavigate();

  useEffect(() => {
    // Check if the user is already signed in
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, redirect to the main page
        navigate('/');
      }
    });

    // Cleanup the Firebase listener
    return () => unsubscribe();
  }, []);

  const handleSignInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  };

  return (
    <div className="container">
      <h1>Sign In to Netflix</h1>
      <button className="google-btn" onClick={handleSignInWithGoogle}>
        <img
          src="google-icon.png"
          alt="Google Logo"
          className="google-icon"
        />
        Sign In with Google
      </button>
    </div>
  );
};

export default SignIn;
