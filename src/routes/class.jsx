import classNames from "classnames";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { getClasses } from "../api/utils";
import { MdKeyboardArrowLeft } from "react-icons/md"
import { ClassTitle } from "../components/classTitle";
import { Spinner } from "react-bootstrap";
import { ClassDescription } from "../components/classDescription";
export const Class = () => {
    const { id } = useParams();
    const [sections, setSections] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [number, setNumber] = useState(id.toUpperCase());
    const [units, setUnits] = useState(0);
    if (sections.length === 0) {
        getClasses(id).then((d) => (setSections(d)));
    }
    useEffect(() => {
        if (sections.length > 0) {
            setTitle(sections[0].title);
            setNumber(`${sections[0].subject}-${sections[0].catalog_number}`);
            setUnits(sections[0].units);
            setDescription(sections[0].description);
        }
        console.log(sections);
    }, [sections]);
    return (
        <>
            <Link to={"/search"} className={classNames("text-muted", "text-decoration-none", "mb-2")}><MdKeyboardArrowLeft />Back to search</Link>
            <div>
                {
                    title === "" ? <Spinner animation="border" /> :
                        <>
                            <ClassTitle id={number} title={title} units={units} />
                            <ClassDescription description={description}/>
                        </>

                }
            </div>
        </>
    );
}