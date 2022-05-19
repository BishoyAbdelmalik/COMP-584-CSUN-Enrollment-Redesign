import classNames from "classnames";
import { useSelector } from "react-redux";
import WishlistClasses from "../components/wishlist/wishlistClasses";
import { selectWishlist } from "../reducers/wishlistSlice";
import appStyles from "./../App.module.scss"

export default function Wishlist() {
  const wishlist = useSelector(selectWishlist);
  return (
    <>
      <h1 className="text-center">My Bookmarked Courses</h1>
      <div className={classNames("mx-auto",appStyles.form)}>
        <WishlistClasses classes={wishlist}/>
      </div>
    </>
  );
}