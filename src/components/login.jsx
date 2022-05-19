import React, { useState } from "react";
import { BsGoogle } from "react-icons/bs";
import { useUserAuth } from "../context/authProviders";
import classNames from "classnames";
import style from "./login.module.scss";
import LoginForm from "./loginForm";
import Message from "../components/Message";
import logo from "./../CSUNorthridgelogo.svg";
import { Link } from "react-router-dom";

import { selectError, error } from "../reducers/profileSlice";
import { useDispatch, useSelector } from "react-redux";

import { handleUserAuthentication } from "../actions/auth";
import LoginOrLine from "./loginOr";

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
    <div
      className={classNames(
        "text-left",
        style.fitPageHeight,
        style.backgroundImg
      )}
    >
      <div className={classNames(style.loginWrapper)}>
        <div>
          <img
            alt="California State California"
            src={logo}
            height="30"
            className="d-inline-block align-content-center"
          />{" "}
          | Enrollment
        </div>
        <h1>Sign In</h1>
        {errorMessage && <Message variant="danger">{errorMessage}</Message>}
        <LoginForm
          onClick={handleLogin}
          emailState={emailState}
          passwordState={passwordState}
          buttonType="manual"
        />
        <LoginOrLine/>
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
      </div>

    </div>
  );
};

export default Login;
