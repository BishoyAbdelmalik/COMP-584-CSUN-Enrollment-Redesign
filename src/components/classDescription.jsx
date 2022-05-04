import classNames from "classnames"
import style from "./classPage.module.scss"

export const ClassDescription = ({description}) => {
    return(
        <div className={classNames(style.description)}>
            <h4>Course Description</h4>
            <p>{description}</p>
        </div>
    )
}