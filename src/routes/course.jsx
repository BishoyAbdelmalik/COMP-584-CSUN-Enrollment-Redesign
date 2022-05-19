import { Row, Col, Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import {
  selectUser,
  setMainSubject,
} from "../reducers/profileSlice";
import { useSelector, useDispatch } from "react-redux";
import { useFirebaseDetails } from "../context/collectionProviders";
import { addAllMajors, selectAllMajors } from "../reducers/classesSlice";
import Delay from "../components/delay";

export default function Course() {
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
    <Delay>
      <div>
        <Row>
          <Col md={4}>Major:</Col>
          <Col xs="auto" className="my-1">
            <Form.Select aria-label="Default select" defaultValue={majorSelected} onChange={({ target }) => {
              setMajor(target.value)
            }}>
              {majors.map((x, index) => (
                <option key={index} value={x.toUpperCase()}>{x.toUpperCase()}</option>
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
    </Delay>
  );
}
