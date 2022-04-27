import ClassCompact from "./classCompact";

const WishlistSection = ({ title, classes }) => {
    return (
        <>
            <h3>{title ? title : "Unorganized"}</h3>
            {classes.map((c, index) => (
                <ClassCompact key={index} id={c.id} name={c.name} units={c.units} />
            ))}
        </>
    );
}

export default WishlistSection;