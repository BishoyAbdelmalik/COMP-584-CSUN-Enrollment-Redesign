import classNames from "classnames";
import { BsBookmark, BsFillBookmarkCheckFill } from "react-icons/bs";
import style from "./classPage.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../reducers/profileSlice";
import {
  selectWishlist,
  removeClass,
  addClass,
} from "../reducers/wishlistSlice";
import { useFirebaseDetails } from "../context/collectionProviders";
import { useEffect, useState } from "react";

export const ClassTitle = ({ id, title, units }) => {
  const favourites = useSelector(selectWishlist);
  const uuid = useSelector(selectUser);

  console.log(favourites);
  const dispatch = useDispatch();
  let { updateFavorites } = useFirebaseDetails();
  let favIds = new Set([...favourites.map(({ id }) => id)]);

  const [isFavorite, updateFavorite] = useState(favIds.has(id));

  function likeCourse(course) {
    if (favIds.has(course.id)) {
      // favIds.delete(course.id);
      dispatch(removeClass(course));
      updateFavorites(uuid, course, false);
    } else {
      // favIds.add(course.id);
      course.semester=null;
      dispatch(addClass(course));
      updateFavorites(uuid, course, true);
    }

    updateFavorite(!isFavorite);
  }

  useEffect(() => {}, [favourites]);

  return (
    <div className={classNames("mt-3", "mb-3", style.title)}>
      <p className={classNames("text-muted", "m-0", "h5")}>
        {id} ({units} units)
      </p>
      <div className={classNames("d-flex", "align-items-center")}>
        <h1 className={classNames("m-0")}>{title}</h1>
        <div className="m-2">
          {!isFavorite ? (
            <BsBookmark
              size={30}
              onClick={() => {
                likeCourse({ id, title, units });
              }}
            />
          ) : (
            <BsFillBookmarkCheckFill
              size={30}
              onClick={() => {
                likeCourse({ id, title, units });
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};
