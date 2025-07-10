import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import auth from '../../firebase.config';

const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const createUsers = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const signInUsers = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const updateUsers = (profile) => {
    setLoading(true);
    return updateProfile(auth.currentUser, profile);
  }

  const signOutUsers = () => {
    setLoading(true);
    return signOut(auth);
  }

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
  }


  const authInfo = {
    users,
    loading,
    createUsers,
    signInUsers,
    signOutUsers,
    updateUsers,
    googleSignIn,
  }

  // observer
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      console.log("users state change", currentUser);
      setUsers(currentUser);
      setLoading(false);
    })
    return () => {
      unSubscribe();
    }
  }, [])

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;