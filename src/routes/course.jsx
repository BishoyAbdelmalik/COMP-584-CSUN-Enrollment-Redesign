import classNames from "classnames";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import {
  selectUser,
  selectMainSubject,
  setMainSubject,
} from "../reducers/profileSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFirebaseDetails } from "../context/collectionProviders";
import { addAllMajors, selectAllMajors } from "../reducers/classesSlice";

export default function Course() {
  const navigate = useNavigate();
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
      console.log(majorSelected);
      dispatch(setMainSubject({ major: majorSelected }));
    }
  }

  return (
    <>
      <div>
        <Row>
          <Col md={4}>Major:</Col>
          <Col xs="auto" className="my-1">
            <Form.Select
              defaultValue={majorSelected}
              onChange={(e) => setMajor(e.target.value)}
            >
              {majors.map((x, i) => (
                <option key={i + 1} value={x.toUpperCase()}>
                  {x.toUpperCase()}
                </option>
              ))}
            </Form.Select>
          </Col>
        </Row>

        <Button
          variant="primary"
          className="rounded-0 mb-1 mt-1 w-100"
          onClick={() => {
            handleSubmit();
          }}
        >
          {majorSelected === "" ? "Skip" : "Save Details"}
        </Button>
      </div>
    </>
  );
}
