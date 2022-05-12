import SearchBox from "../components/searchBox";
import { Button } from "react-bootstrap";
import appStyles from "./../App.module.scss"
import classNames from "classnames";
import GEList from "./../components/geList";
import SubjSnippet from "../components/subjSnippet";
import { selectGE, selectMainSubjectClasses } from "../reducers/classesSlice";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function Search() {
  const ges = useSelector(selectGE);
  const subj = useSelector(selectMainSubjectClasses);
  const [selectedType, setSelectedType] = useState("");
  return (
    <>
      <h2 className="text-center">Class Search</h2>
      <div className={classNames("mx-auto", appStyles.form)}>
        <SearchBox onSearch={(value) => {
          console.log(value);
        }} />
        <Button
          variant="primary"
          className="mb-1 mt-1 w-100"
          onClick={() => { setSelectedType("major") }}
        >
          Quick search by main subject
        </Button>
        <Button
          variant="primary"
          className="mb-1 mt-1 w-100"
          onClick={() => { setSelectedType("ge") }}
        >
          Quick search by GE
        </Button>
        <div className="mb-3 mt-3">
          {selectedType === "ge" && <GEList ges={ges} />}
          {selectedType === "major" && <SubjSnippet subj={subj} />}
        </div>
      </div>
    </>
  );
}