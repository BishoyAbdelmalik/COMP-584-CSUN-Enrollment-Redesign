import React, { useState } from "react";
import { BsGoogle } from "react-icons/bs";
import { useUserAuth } from "../../context/authProviders";
import style from "./login.module.scss";
import LoginForm from "./loginForm";
import Message from "../Message";
import { Link } from "react-router-dom";

import { selectError, } from "../../reducers/profileSlice";
import { useDispatch, useSelector } from "react-redux";

import { handleUserAuthentication } from "../../actions/auth";
import LoginOrLine from "./loginOr";
import LoginSignupWrapper from "./loginSignupWrapper";

const Login = () => {
  const emailState = useState("");
  const passwordState = useState("");
  const dispatch = useDispatch();

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
    <LoginSignupWrapper>
      <h1>Sign In</h1>
      {errorMessage && <Message variant="danger">{errorMessage}</Message>}
      <LoginForm
        onClick={handleLogin}
        emailState={emailState}
        passwordState={passwordState}
        buttonType="manual"
      />
      <LoginOrLine />
      <button
        className="btn-google"
        onClick={() => {
          handleLogin("google");
        }}
      >
        <BsGoogle className={style.googleIcon} /> Login with Google
      </button>
      <p className="mt-3">Don't have an Account? <Link to="/signup">Sign Up</Link>
      </p>
    </LoginSignupWrapper>
  )
};

export default Login;
