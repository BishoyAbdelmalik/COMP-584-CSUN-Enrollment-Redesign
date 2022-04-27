import WishlistSection from "./wishlistSection";

const WishlistClasses = ({ classes }) => {
    const catagories = [...new Set(classes.map((c) => c.semester))];
    const getClassesForCategory = (category) => classes.filter((c) => c.semester === category);
    return (
        <>
            {classes.length === 0 && <p>You have not bookmarked any classes</p>}
            {catagories.map((category, index) => <WishlistSection key={index} title={category} classes={getClassesForCategory(category)} />)}
        </>
    );
}

export default WishlistClasses;