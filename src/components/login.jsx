import React, { useState } from "react";
import { BsGoogle } from "react-icons/bs";
import { useUserAuth } from "../context/authProviders";
import classNames from "classnames";
import style from "./login.module.scss";
import LoginForm from "./loginForm";
import Message from "../components/Message";

import { selectError, error } from "../reducers/profileSlice";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../actions/auth";

import { handleUserAuthentication } from "../actions/auth";

const Login = () => {
  const emailState = useState("");
  const passwordState = useState("");
  const dispatch = useDispatch();

  const errorMessage = useSelector(selectError);
  const { logIn, googleSignIn } = useUserAuth();

  const handleLogin = async (buttonType) => {
    // setError("");

    if (buttonType === "google") {
      dispatch(handleUserAuthentication(googleSignIn));
    } else {
      let email = emailState[0];
      let password = passwordState[0];
      dispatch(handleUserAuthentication(logIn, email, password));
    }
  };

  return (
    <div
      className={classNames(
        "text-center",
        "d-flex",
        "flex-column",
        "justify-content-center",
        style.fitPageHeight
      )}
    >
      <h1 className="mt-3 mb-4 font-weight-bold">myCSUNclass</h1>
      {errorMessage && <Message variant="danger">{errorMessage}</Message>}
      <LoginForm
        onClick={handleLogin}
        emailState={emailState}
        passwordState={passwordState}
        buttonType="manual"
      />
      <p className="h3 mt-4 mb-4 font-weight-bold">Sign in with:</p>
      <div
        className={classNames(
          "d-flex justify-content-center align-items-center",
          "pointer"
        )}
        onClick={() => {
          handleLogin("google");
        }}
      >
        <BsGoogle className={style.googleIcon} />
        <p className="m-0">Login with Google</p>
      </div>
    </div>
  );
};

export default Login;
