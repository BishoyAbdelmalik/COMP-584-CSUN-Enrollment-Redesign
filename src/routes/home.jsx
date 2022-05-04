import { selectStatus, login, logout, selectMainSubject } from "../reducers/profileSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

// import style from "./../App.module.scss";

import Login from "../components/login";

import Signup from "../components/Signup";
import Search from "./search";
import { addGEClass, addMainSubjectClass } from "../reducers/classesSlice";
import { getClasses, getGEClasses } from "../api/utils";
import { signin } from "../actions/auth";

const Home = () => {
  const status = useSelector(selectStatus);
  const dispatch = useDispatch();
  const mainSubject = useSelector(selectMainSubject);
  useEffect(() => {
    if (status === 'logged-in') {
      getGEClasses().then(response => dispatch(addGEClass({ ge: response })));
    }
  }, [status, dispatch]);

  useEffect(() => {
    if (status === 'logged-in') {
      getClasses(mainSubject).then(response => dispatch(addMainSubjectClass({ mainSubject: response })));
    }
  }, [mainSubject, status, dispatch]);


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      if (currentuser) {
        // user is logged in, send the user's details to redux, store the current user in the state

        signin(dispatch,currentuser);

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
