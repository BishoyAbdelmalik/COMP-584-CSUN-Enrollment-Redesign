import classNames from "classnames"
import { useEffect, useState } from "react"
import { convertTime, getTeacherName } from "../api/utils"
import appStyle from "./../App.module.scss"
import style from "./classPage.module.scss"
import { Card, Button } from "react-bootstrap";

export const Section = ({ section }) => {
    const [profName, setProfName] = useState(section.instructors[0].instructor);
    useEffect(() => {
        if (profName && profName.indexOf("@") > -1) {
            getTeacherName(profName).then((name) => setProfName(name));
        }
    }, [profName]);

    return (
        <Card>
            <Card.Header>Section: {section.section_number}</Card.Header>
            <Card.Body>
                <p className="mb-1"><b>Days:</b> {section.meetings[0].days}</p>
                <p className="mb-1"><b>Time:</b> {convertTime(section.meetings[0].start_time)}-{convertTime(section.meetings[0].end_time)}</p>
                <p className="mb-1"><b>Location:</b> {section.meetings[0].location}</p>
                <p className="mb-1"><b>Instructor:</b> {profName}</p>
                <div className={classNames(appStyle.grid, style.sectionTextGrid)}>
                    <p className="mb-1"><b>Seats Left:</b> {section.enrollment_cap - section.enrollment_count}</p>
                    <p className="mb-1"><b>Wait list:</b> {section.waitlist_count}</p>
                    <p className="mb-1"><b>Type:</b> {section.class_type}</p>
                    <p className="mb-1"><b>Course ID:</b> {section.class_number}</p>
                </div>
                {
                    section.enrollment_cap - section.enrollment_count > 0
                        ? <Button
                            variant="primary"
                            className="w-50 text-center mb-1 mt-1"
                            onClick={() => console.log("enroll")}
                        >
                            Enroll
                        </Button>
                        : <Button
                            variant="secondary"
                            className="w-50 text-center mb-1 mt-1"
                            onClick={() => console.log("waitlist")}
                        >
                            Wait list
                        </Button>
                }
            </Card.Body>
        </Card>
        /*<div className={classNames("border", "rounded")} style={{ padding: '.75rem' }}>
            <h3 className={classNames("h5", "bold")}>Section: {section.section_number}</h3>
            <p className="mb-1"><span className="bold">Days:</span> {section.meetings[0].days}</p>
            <p className="mb-1"><span className="bold">Time:</span> {convertTime(section.meetings[0].start_time)}-{convertTime(section.meetings[0].end_time)}</p>
            <p className="mb-1"><span className="bold">Location:</span> {section.meetings[0].location}</p>
            <p className="mb-1"><span className="bold">Instructor:</span> {profName}</p>
            <div className={classNames(appStyle.grid, style.sectionTextGrid)}>
                <p className="mb-1"><span className="bold">Seats Left:</span> {section.enrollment_cap - section.enrollment_count}</p>
                <p className="mb-1"><span className="bold">Wait list:</span> {section.waitlist_count}</p>
                <p className="mb-1"><span className="bold">Type:</span> {section.class_type}</p>
                <p className="mb-1"><span className="bold">Course ID:</span> {section.class_number}</p>
            </div>
        </div>
        */
    )
}