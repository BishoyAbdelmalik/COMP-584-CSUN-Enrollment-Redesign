import { selectStatus, login, logout } from "../reducers/profileSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

// import style from "./../App.module.scss";

import Login from "../components/login";
import Signup from "../components/Signup";

import Search from "./search";

const Home = () => {
  const status = useSelector(selectStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      if (currentuser) {
        // user is logged in, send the user's details to redux, store the current user in the state

        dispatch(
          login({
            email: currentuser.email,
            uid: currentuser.uid,
            status: "logged-in",
            mainSubject: "",
          })
        );
      } else {
        dispatch(logout());
      }
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  return <>{!status ? <Login /> : <Search />}</>;
};

export default Home;
