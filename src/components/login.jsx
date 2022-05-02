import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { BsGoogle } from "react-icons/bs";
import { useUserAuth } from "../context/authProviders";
import classNames from "classnames";
import style from "./login.module.scss";
import LoginForm from "./loginForm";

import { login } from "../reducers/profileSlice";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const emailState = useState("");
  const passwordState = useState("");
  const dispatch = useDispatch();

  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleLogin = async (buttonType) => {
    setError("");

    try {
      let currentUser;
      if (buttonType === "google") {
        currentUser = await googleSignIn();
      } else {
        let email = emailState[0];
        let password = passwordState[0];
        currentUser = await logIn(email, password);
      }

      dispatch(
        login({
          email: currentUser.email,
          uid: currentUser.uid,
          status: "logged-in",
          mainSubject: "",
        })
      );
      navigate("/home");
    } catch (err) {
      setError(err.message);
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
      {error && <Alert variant="danger">{error}</Alert>}
      <LoginForm
        onClick={handleLogin}
        emailState={emailState}
        passwordState={passwordState}
        buttonType="manual"
      />
      {/* <p className="h3 mt-4 mb-4 font-weight-bold">Sign in with:</p> */}
      <div
        className={classNames(
          "d-flex justify-content-center align-items-center",
          "pointer"
        )}
        onClick={() => {}}
      >
        <BsGoogle
          className={style.googleIcon}
          onClick={() => handleLogin("google")}
        />
        <p className="m-0">Login with Google</p>
      </div>
    </div>
  );
};

export default Login;
