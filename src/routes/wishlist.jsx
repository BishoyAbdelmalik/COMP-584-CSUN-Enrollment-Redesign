import { useSelector } from "react-redux";
import WishlistClasses from "../components/wishlistClasses";
import { selectWishlist } from "../reducers/wishlistSlice";

export default function Wishlist() {
  const wishlist = useSelector(selectWishlist);
  return (
    <>
      <h2 className="text-center">My Bookmarked Courses</h2>
      <WishlistClasses classes={wishlist}/>
    </>
  );
}