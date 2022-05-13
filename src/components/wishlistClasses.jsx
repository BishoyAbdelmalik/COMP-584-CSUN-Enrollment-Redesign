import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFirebaseDetails } from "../context/collectionProviders";
import { selectUser } from "../reducers/profileSlice";
import { addClass, removeClass } from "../reducers/wishlistSlice";
import WishlistSection from "./wishlistSection";
import WishlistSetCategoryModal from "./wishlistSetCategoryModal";

const WishlistClasses = ({ classes }) => {
    const catagories = [...new Set(classes.map((c) => c.semester))].sort((a, b) => {
        if (a === '') {
            return -1;
        }
        return 0;
    });
    const dispatch = useDispatch();
    const showDropDownState = useState("");
    const [showModal, setShowModal] = useState(false);
    const modalClose = () => {
        setShowModal(false);
        showDropDownState[1]("");
    }
    const modalOpen = () => {
        setShowModal(true);
    };
    const modalSave = (course) => {
        unbookmark(course);
        bookmark(course);
        modalClose();
    }
    // const favourites = useSelector(selectWishlist);
    const uuid = useSelector(selectUser);
    let favIds = new Set([...classes.map(({ id }) => id)]);
    let { updateFavorites } = useFirebaseDetails();

    const unbookmark= (course) =>{
        if (favIds.has(course.id)) {
          dispatch(removeClass(course));
          updateFavorites(uuid, course, false);
        }
    }
    const bookmark = (course)=>{
        dispatch(addClass(course));
        updateFavorites(uuid, course, true);
    }
    const getClassesForCategory = (category) => classes.filter((c) => c.semester === category);
    return (
        <>
            {classes.length === 0 && <p>You have not bookmarked any classes</p>}
            {catagories.map((category, index) => <WishlistSection key={index} title={category} classes={getClassesForCategory(category)} showDropDownState={showDropDownState} openModal={modalOpen} unbookmark={unbookmark} />)}
            <WishlistSetCategoryModal show={showModal} handleClose={modalClose} handleSave={modalSave} course={classes.find(c=> c.id === showDropDownState[0])} />
        </>
    );
}

export default WishlistClasses;