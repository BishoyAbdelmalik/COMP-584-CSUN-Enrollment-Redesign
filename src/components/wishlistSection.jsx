import classNames from "classnames";
import ClassCompact from "./classCompact";

const WishlistSection = ({ title, classes, showDropDownState, openModal }) => {
    return (
        <div className="mb-5">
            <h4 className="font-weight-bold">{title ? title : "Unorganized"}</h4>
            <hr className="m-0 mb-1"></hr>
            {classes.map((c, index) => (
                <ClassCompact key={index} id={c.id} name={c.name} units={c.units} dropDown={showDropDownState} openModal={openModal} />
            ))}
            <hr className="m-0 mt-1 mb-1"></hr>
            <div className={classNames("d-flex", "justify-content-between")}>
                <p className="h5 mt-2 mb-2">Total Unit Count</p>
                <p className="h5 m-2">{classes.map(({ units }) => units).reduce((a, b) => a + b, 0)}</p>
            </div>
        </div>
    );
}

export default WishlistSection;