import classNames from "classnames"
import {BsBookmark} from "react-icons/bs"
export const ClassTitle = ({ id, title, units }) => {
    return (
        <div className={classNames("mt-3","mb-3")}>
            <p className={classNames("text-muted","m-0","h5")}>{id} ({units} units)</p>
            <div className={classNames("d-flex","align-items-center")}>
                <h1 className={classNames("m-0")}>{title}</h1>
                <div className="m-2">
                    <BsBookmark size={30}/>
                </div>
            </div>
        </div>
    );
}