import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const WishlistSetCategoryModal = ({ show, handleClose, handleSave, course }) => {
    const [semester, setSemester] = useState("");
    const [year, setYear] = useState("");
    useEffect(() => {
        if (course !== undefined) {
            if (course.semester === null) {
                setSemester("Unorganized");
                setYear("");
            } else {
                const semesterArray = course.semester.split(" ");
                setSemester(semesterArray[0]);
                setYear(semesterArray[1]);
            }
        }
    }, [course]);

    return (
        <>
            {
                course !== undefined &&
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Set Category</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Select a semester you plan on taking {course.id}.</p>
                        <Form.Select aria-label="Default select example" defaultValue={semester} onChange={({ target }) => {
                            setSemester(target.value);
                        }}>
                            <option value="Unorganized">Unorganized</option>
                            <option value="Fall">Fall</option>
                            <option value="Spring">Spring</option>
                            <option value="Summer">Summer</option>
                            <option value="Winter">Winter</option>
                        </Form.Select>
                        <p>Select a year you plan on taking {course.id}.</p>
                        <Form.Control
                            type="number"
                            min={1000}
                            max={9999}
                            defaultValue={year}
                            onChange={({target}) => {
                                if (target.value.length>4 ) {
                                    target.value=year;
                                }
                                setYear(target.value);
                            }}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleSave}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            }
        </>

    );
}

export default WishlistSetCategoryModal;