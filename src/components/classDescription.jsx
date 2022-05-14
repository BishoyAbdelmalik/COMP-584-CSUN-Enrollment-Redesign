import classNames from "classnames";
import style from "./classPage.module.scss";

export const ClassDescription = ({ description }) => {
  return (
    <div className={classNames(style.description)}>
      <h2>Course Description</h2>
      <p>{description}</p>
    </div>
  )
}
