import { Form, Button } from "react-bootstrap";
import classNames from "classnames";

import appStyles from "./../App.module.scss";

const LoginForm = ({ onClick, emailState, passwordState }) => {
  const setEmail = emailState[1];
  const setPassword = passwordState[1];

  return (
    <>
      <Form
        className={classNames(
          appStyles.form
        )}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Email"
            onChange={({ target }) => {
              setEmail(target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-1" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={({ target }) => {
              setPassword(target.value);
            }}
          />
        </Form.Group>
        <p className="mb-2">Forgot Password?</p>
        <Button
          variant="primary"
          onClick={() => onClick("manual")}
          button-type="manual"
        >
          Login
        </Button>
      </Form>
    </>
  );
};

export default LoginForm;
