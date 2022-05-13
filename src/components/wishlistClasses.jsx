import { useState } from "react";
import WishlistSection from "./wishlistSection";
import WishlistSetCategoryModal from "./wishlistSetCategoryModal";

const WishlistClasses = ({ classes }) => {
    const catagories = [...new Set(classes.map((c) => c.semester))].sort((a, b) => {
        if (a === '') {
            return -1;
        }
        return 0;
    });
    const showDropDownState = useState("");
    const [showModal, setShowModal] = useState(false);
    const modalClose = () => {
        setShowModal(false);
        showDropDownState[1]("");
    }
    const modalOpen = () => {
        setShowModal(true);
    };
    const modalSave = () => {
        modalClose();
    }
    const getClassesForCategory = (category) => classes.filter((c) => c.semester === category);
    return (
        <>
            {classes.length === 0 && <p>You have not bookmarked any classes</p>}
            {catagories.map((category, index) => <WishlistSection key={index} title={category} classes={getClassesForCategory(category)} showDropDownState={showDropDownState} openModal={modalOpen} />)}
            <WishlistSetCategoryModal show={showModal} handleClose={modalClose} handleSave={modalSave} course={classes.find(c=> c.id === showDropDownState[0])} />
        </>
    );
}

export default WishlistClasses;