import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../reducers/profileSlice";
import LoginForm from "./loginForm";
import { BsGoogle } from "react-icons/bs";
import style from "./login.module.scss";
import classNames from "classnames";

const Login = () => {
  const dispatch = useDispatch();
  const loginFunction = () => {
    let email = emailState[0];
    let mainSubject = "test";
    let payload = {
      email,
      mainSubject,
    };
    if (email !== "") {
      dispatch(login(payload));
    }
  };
  const emailState = useState("");
  const passwordState = useState("");

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
      <LoginForm
        onClick={loginFunction}
        emailState={emailState}
        passwordState={passwordState}
      />
      <p className="h3 mt-4 mb-4 font-weight-bold">Sign in with:</p>
      <div
        className={classNames(
          "d-flex justify-content-center align-items-center",
          "pointer"
        )}
        onClick={() => {}}
      >
        <BsGoogle className={style.googleIcon} />
        <p className="m-0">Login with Google</p>
      </div>
    </div>
  );
};

export default Login;
