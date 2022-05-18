import React, { useState } from "react";
import { BsGoogle } from "react-icons/bs";
import { useUserAuth } from "../context/authProviders";
import classNames from "classnames";
import style from "./login.module.scss";
import LoginForm from "./loginForm";
import Message from "../components/Message";

import { selectError, error } from "../reducers/profileSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { handleUserAuthentication } from "../actions/auth";

const Login = () => {
  const emailState = useState("");
  const passwordState = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const errorMessage = useSelector(selectError);
  const { logIn, googleSignIn } = useUserAuth();

  const handleLogin = async (buttonType) => {
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
        "text-left",
        "d-flex",
        "flex-column",
        "justify-content-center",
        style.fitPageHeight
      )}
    >
      <h1 className="mt-3 mb-4 font-weight-bold">Sign In</h1>
      {errorMessage && <Message variant="danger">{errorMessage}</Message>}
      <LoginForm
        onClick={handleLogin}
        emailState={emailState}
        passwordState={passwordState}
        buttonType="manual"
      />
      <div>
        <hr />
        <p>or</p>
        <hr />
      </div>
      <button
        className="btn-google"
        onClick={() => {
          handleLogin("google");
        }}
      >
        <BsGoogle className={style.googleIcon} /> Login with Google
      </button>
      <p>Don't have an Account? <span role="link" onClick={() => navigate("/signup", { replace: true })}>Sign Up</span>
      </p>
    </div>
  );
};

export default Login;
