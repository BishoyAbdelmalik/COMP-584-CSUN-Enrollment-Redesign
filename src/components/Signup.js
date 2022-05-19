import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/authProviders";
import { useDispatch } from "react-redux";
import { login } from "../reducers/profileSlice";
import classNames from "classnames";
import Message from "../components/Message";
import appStyles from "./../App.module.scss";
import LoginOrLine from "./loginOr";
import LoginSignupWrapper from "./loginSignupWrapper";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { signUp } = useUserAuth();

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
    <LoginSignupWrapper>
        <h1>Sign Up</h1>
        {error && <Message variant="danger">{error}</Message>}
        <Form className={classNames(
          appStyles.form
        )} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email"
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
      
    </LoginSignupWrapper>
  )
 
};

export default Signup;
