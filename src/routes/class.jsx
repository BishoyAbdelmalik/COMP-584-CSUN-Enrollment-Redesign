import classNames from "classnames";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getClasses } from "../api/utils";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { ClassTitle } from "../components/SingleClassView/classTitle";
import { Spinner } from "react-bootstrap";
import { ClassDescription } from "../components/SingleClassView/classDescription";
import { ClassSections } from "../components/SingleClassView/classSections";
import appStyle from "./../App.module.scss";
import style from "./../components/SingleClassView/classPage.module.scss";

export const Class = () => {
  const { id } = useParams();
  const [sections, setSections] = useState(undefined);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [number, setNumber] = useState(id.toUpperCase());
  const [units, setUnits] = useState(0);
  useEffect(() => {
    if (sections === undefined) {
      getClasses(id).then((d) => setSections(d));
    }
    if (sections !== undefined && sections.length > 0) {
      setTitle(sections[0].title);
      setNumber(`${sections[0].subject}-${sections[0].catalog_number}`);
      setUnits(sections[0].units);
      setDescription(sections[0].description);
    } else {
      setTitle("Class not offered this semester");
    }
  }, [sections]);
  return (
    <>
      <Link
        to={"/search"}
        className={classNames("text-muted", "text-decoration-none", "mb-2")}
      >
        <MdKeyboardArrowLeft />
        Back to search
      </Link>
      <div className={classNames(appStyle.grid, style.pageGrid)}>
        {sections === undefined ? (
          <Spinner animation="border" />
        ) : (
          <>
            <ClassTitle id={number} title={title} units={units} />
            <ClassDescription description={description} />
            <ClassSections sections={sections} />
          </>
        )}
      </div>
    </>
  );
};
