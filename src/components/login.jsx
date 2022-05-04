import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsGoogle } from "react-icons/bs";
import { useUserAuth } from "../context/authProviders";
import classNames from "classnames";
import style from "./login.module.scss";
import LoginForm from "./loginForm";
import Message from "../components/Message";

import { login, selectError, error } from "../reducers/profileSlice";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const emailState = useState("");
  const passwordState = useState("");
  const dispatch = useDispatch();

  const errorMessage = useSelector(selectError);

  // const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleLogin = async (buttonType) => {
    // setError("");

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

      dispatch(error({ errorMessage: "" }));
      navigate("/");
    } catch (err) {
      dispatch(error({ errorMessage: err.message }));
      // setError({ errorMessage: err });
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
