import React, { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    return signOut(auth);
  }
  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      localStorage.setItem(
        "user",
        !!currentuser ? JSON.stringify(currentuser) : ""
      );
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const value = { logIn, signUp, logOut, googleSignIn, user };
  return (
    <userAuthContext.Provider value={value}>
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  const contextVerify = useContext(userAuthContext);

  if (contextVerify === undefined)
    throw new Error(
      "useFirebaseAuth must be used within a FirebaseAuthProvider"
    );

  return contextVerify;
}
