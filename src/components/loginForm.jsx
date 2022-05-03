import { Form, Button } from "react-bootstrap";
import classNames from "classnames";

import appStyles from "./../App.module.scss";
const LoginForm = ({ onClick, emailState, passwordState }) => {
  const [email, setEmail] = emailState;
  const [password, setPassword] = passwordState;

  return (
    <>
      <Form
        className={classNames(
          "d-flex",
          "flex-column",
          "mx-auto",
          appStyles.form
        )}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Email"
            className="rounded-0"
            onChange={({ target }) => {
              setEmail(target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Password"
            className="rounded-0"
            onChange={({ target }) => {
              setPassword(target.value);
            }}
          />
        </Form.Group>
        <Button
          variant="primary"
          className="rounded-0 w-50 mx-auto"
          onClick={() => onClick("manual")}
          button-type="manual"
        >
          Log In
        </Button>
      </Form>
    </>
  );
};

export default LoginForm;
