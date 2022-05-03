import SearchBox from "../components/searchBox";
import { Button } from "react-bootstrap";
import appStyles from "./../App.module.scss"
import classNames from "classnames";

export default function Search() {
  return (
    <>
      <h2 className="text-center">Class Search</h2>
      <div className={classNames("mx-auto",appStyles.form)}>
        <SearchBox onSearch={(value)=>{
          console.log(value);
        }} />
        <Button
          variant="primary"
          className="rounded-0 mb-1 mt-1 w-100"
          onClick={()=>{}}
        >
          Quick search by main subject
        </Button>
        <Button
          variant="primary"
          className="rounded-0 mb-1 mt-1 w-100"
          onClick={()=>{}}
        >
          Quick search by GE
        </Button>
      </div>
    </>
  );
}