import classNames from "classnames";
import style from "./classPage.module.scss";

export const ClassDescription = ({ description }) => {
<<<<<<< HEAD
    return (
        <div className={classNames(style.description)}>
            <h2>Course Description</h2>
            <p>{description}</p>
        </div>
    )
}
=======
  return (
    <div className={classNames(style.description)}>
      <h4>Course Description</h4>
      <p>{description}</p>
    </div>
  );
};
>>>>>>> main
