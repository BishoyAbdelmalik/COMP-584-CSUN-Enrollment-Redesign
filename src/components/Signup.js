import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/authProviders";
import { useDispatch } from "react-redux";
import { login } from "../reducers/profileSlice";
import logo from "./../CSUNorthridgelogo.svg";
import style from "./login.module.scss";
import classNames from "classnames";
import Message from "../components/Message";
import appStyles from "./../App.module.scss";
import LoginOrLine from "./loginOr";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      let currentUser = await signUp(email, password);

      dispatch(
        login({
          email: currentUser.user.email,
        })
      );
    } catch (err) {
      setError(err.message);
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
        <h1>Sign Up</h1>
        {error && <Message variant="danger">{error}</Message>}
        <Form className={classNames(
          appStyles.form
        )} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-1" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

            <Button variant="primary" type="Submit">
              Sign up
            </Button>
        </Form>
        <LoginOrLine/>
        <p className="mt-3">
         Already have an account? <Link to="/">Log In</Link>
       </p>
      
      </div>

    </div>
  );
};

export default Signup;
