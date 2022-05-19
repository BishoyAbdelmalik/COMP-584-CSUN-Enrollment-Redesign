import SearchBox from "../components/searchBox";
import { Button } from "react-bootstrap";
import appStyles from "./../App.module.scss"
import classNames from "classnames";
import GEList from "./../components/geList";
import SubjSnippet from "../components/subjSnippet";
import { selectAllCourses, selectGE, selectMainSubjectClasses } from "../reducers/classesSlice";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function Search() {
  const ges = useSelector(selectGE);
  const subj = useSelector(selectMainSubjectClasses);
  const allCourses = useSelector(selectAllCourses);
  let [matchingCourses, setMatchingCourses] = useState(allCourses);
  const [selectedType, setSelectedType] = useState("");
  return (
    <>
      <h1 className="text-center">Class Search</h1>
      <div className={classNames("mx-auto", appStyles.form)}>
        <SearchBox onSearch={(value) => {
          value = value.trim();
          if (selectedType !== "search") {
            setSelectedType("search");
          }

          setMatchingCourses(function () {
            if (value === "") {
              return [];
            }
            // Breaks words in search box apart into an array, assuming they are separated by a space or dash.
            let searchTerms = value.split(/[ -]/);
            console.log(searchTerms);
            let subjectMatches = allCourses.filter(function (course) {
              for (let term of searchTerms) {
                if (!(course.subject.toLowerCase().startsWith(term.toLowerCase()) ||
                  course.catalog_number.toLowerCase().startsWith(term.toLowerCase()))) {
                  return false;
                }
              }
              return true;
            });
            // If there weren't any matches from subject and catalog_number, 
            // then we return results with matches from title as well.
            if (subjectMatches.length === 0) {
              let titleMatches = allCourses.filter(function (course) {
                // Words contains the subject, catalog_number, and words from the title. 
                // We'll search thru those.
                let words = [course.subject.toLowerCase(), course.catalog_number.toLowerCase()];
                words = words.concat(course.title.toLowerCase().split(" "));
                for (let term of searchTerms) {
                  let foundMatch = false;
                  for (let word of words) {
                    if (word.startsWith(term)) {
                      foundMatch = true;
                      break;
                    }
                  }
                  if (!foundMatch) {
                    return false;
                  }
                }
                return true;
              });
              return titleMatches;
            } else {
              return subjectMatches;
            }
          }
          );
        }} />
        <Button
          variant="primary"
          className="mb-1 mt-1 w-100"
          onClick={() => { setSelectedType("major") }}
        >
          Quick Search by Main Subject
        </Button>
        <Button
          variant="primary"
          className="mb-1 mt-1 w-100"
          onClick={() => { setSelectedType("ge") }}
        >
          Quick Search by GE
        </Button>
        <div className="mb-3 mt-3">
          {selectedType === "ge" && <GEList ges={ges} />}
          {selectedType === "major" && <SubjSnippet subj={subj} />}
          {selectedType === "search" && <SubjSnippet subj={matchingCourses} />}
        </div>
      </div>
    </>
  );
}