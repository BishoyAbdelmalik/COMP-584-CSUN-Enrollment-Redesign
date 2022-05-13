import classNames from "classnames"
import { useEffect, useState } from "react"
import { convertTime, getTeacherName } from "../api/utils"
import appStyle from "./../App.module.scss"
import style from "./classPage.module.scss"

export const Section = ({ section }) => {
    const [profName, setProfName] = useState(section.instructors[0].instructor);
    useEffect(() => {
        if (profName && profName.indexOf("@") > -1) {
            getTeacherName(profName).then((name) => setProfName(name));
        }
    }, [profName]);

    return (
        <div className={classNames("p-2", "border", "rounded")}>
            <h3 className={classNames("h5", "bold")}>{section.section_number}</h3>
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

    )
}