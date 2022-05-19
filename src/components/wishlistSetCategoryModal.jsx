import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const WishlistSetCategoryModal = ({ show, handleClose, handleSave, course }) => {
    const [semester, setSemester] = useState("");
    const [year, setYear] = useState(0);
    useEffect(() => {
        if (course) {
            if (course.semester === "") {
                setSemester("Unorganized");
                setYear(new Date().getFullYear());
            } else {
                const semesterArray = course.semester.split(" ");
                setSemester(semesterArray[0]);
                setYear(parseInt(semesterArray[1]));
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
                            defaultValue={new Date().getFullYear()}
                            onChange={({ target }) => {
                                if (target.value.length > 4) {
                                    target.value = year;
                                }
                                setYear(target.value);
                            }}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={() => {
                            let s = semester;
                            let y = year;
                            let divider = " ";
                            if (s === "Unorganized") {
                                s = "";
                                y = "";
                                divider = "";
                            }
                            handleSave({
                                id: course.id,
                                title: course.title,
                                units: course.units,
                                semester: `${s}${divider}${y}`
                            });
                        }}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            }
        </>

    );
}

export default WishlistSetCategoryModal;