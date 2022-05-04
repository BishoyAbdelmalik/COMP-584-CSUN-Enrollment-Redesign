import ClassCompact from "./classCompact";

const WishlistSection = ({ title, classes }) => {
    return (
        <div className="mb-5">
            <h4 className="font-weight-bold">{title ? title : "Unorganized"}</h4>
            <hr className="m-0 mb-1"></hr>
            {classes.map((c, index) => (
                <ClassCompact key={index} id={c.id} name={c.name} units={c.units} />
            ))}
        </div>
    );
}

export default WishlistSection;