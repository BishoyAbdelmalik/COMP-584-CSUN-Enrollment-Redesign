import { Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import {
  selectUser,
  setMainSubject,
} from "../../reducers/profileSlice";
import { useSelector, useDispatch } from "react-redux";
import { useFirebaseDetails } from "../../context/collectionProviders";
import { addAllMajors, selectAllMajors } from "../../reducers/classesSlice";
import Delay from "../delay";
import LoginSignupWrapper from "./loginSignupWrapper";
import classNames from "classnames";
import appStyles from "./../../App.module.scss";

export default function SelectMainSubject() {
  const uuid = useSelector(selectUser);
  const dispatch = useDispatch();
  const majors = useSelector(selectAllMajors);
  const [majorSelected, setMajor] = useState("COMP");

  let { fetchMajors, updateUserMajorDetails } = useFirebaseDetails();
  useEffect(() => {
    if (majors.length === 0) {
      fetchMajors()
        .then((snapshot) => {
          const allMajors = Object.values(snapshot.val());
          dispatch(addAllMajors({ allMajors }));
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

  function handleSubmit() {
    if (majorSelected !== "") {
      updateUserMajorDetails({ id: majorSelected }, uuid);
      dispatch(setMainSubject({ major: majorSelected }));
    }
  }

  return (
    <LoginSignupWrapper>
      <Delay>
        <div className={classNames(
          appStyles.form
        )}>
          <h2 className="mt-4">Select main subject:</h2>
          <div className="mt-4">
          <Form.Select aria-label="Default select" defaultValue={majorSelected} onChange={({ target }) => {
            setMajor(target.value)
          }}>
            {majors.map((x, index) => (
              <option key={index} value={x.toUpperCase()}>{x.toUpperCase()}</option>
              ))}
          </Form.Select>
          </div>
          <Button
            variant="primary"
            className="mt-4"
            onClick={() => {
              handleSubmit();
            }}
          >
            {majorSelected === "" ? "Skip" : "Save Details"}
          </Button>
        </div>
      </Delay>
    </LoginSignupWrapper>
  );
}
