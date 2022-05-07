import { useState } from "react";
import WishlistSection from "./wishlistSection";

const WishlistClasses = ({ classes }) => {
    const catagories = [...new Set(classes.map((c) => c.semester))].sort((a, b) => {
        if (a === null) {
            return -1;
        }
        return 0;
    });
    const showDropDownState = useState("");

    const getClassesForCategory = (category) => classes.filter((c) => c.semester === category);
    return (
        <>
            {classes.length === 0 && <p>You have not bookmarked any classes</p>}
            {catagories.map((category, index) => <WishlistSection key={index} title={category} classes={getClassesForCategory(category)} showDropDownState={showDropDownState} />)}
        </>
    );
}

export default WishlistClasses;