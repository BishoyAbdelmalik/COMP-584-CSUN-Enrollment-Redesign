import { getMainSubject } from "../api/utils";
import { useUserAuth } from "../context/authProviders";
import {
  logout,
  error,
  login,
  setMainSubject,
} from "./../reducers/profileSlice";
import { useFirebaseDetails } from "../context/collectionProviders";
import { setUserWishList } from "./../reducers/wishlistSlice";
import { async } from "@firebase/util";

export const manualSignUp = (email, password) => async (dispatch) => {
  const { signUp } = useUserAuth();

  try {
    let currentUser = await signUp(email, password);
    let { checkDBContainsUser } = useFirebaseDetails();
    let userDetails = await checkDBContainsUser(currentUser.user.uid);

    dispatch(
      login({
        email: currentUser.user.email,
        uid: currentUser.user.uid,
        status: "logged-in",
        mainSubject: "",
      })
    );
  } catch (err) {
    dispatch(error({ errorMessage: err.message }));
  }
};

export const signout = () => async (dispatch) => {
  const { logOut } = useUserAuth();
  try {
    await logOut();
    dispatch(logout());
  } catch (err) {
    dispatch(error({ errorMessage: err.message }));
  }
};

export const signin = (dispatch, currentUser) => {
  dispatch(
    login({
      email: currentUser.email,
      uid: currentUser.uid,
      status: "logged-in",
      // mainSubject: getMainSubject(currentUser.uid),
    })
  );
};

export const handleUserAuthentication =
  (authCallback, ...args) =>
  async (dispatch) => {
    try {
      let { user: currentUser } = await authCallback(...args);

      dispatch(
        login({
          email: currentUser.email,
          uid: currentUser.uid,
          status: "logged-in",
          mainSubject: "",
        })
      );
    } catch (err) {
      dispatch(error({ errorMessage: err.message }));
    }
  };

export const getUserInfo = (uuid) => async (dispatch) => {
  let { checkDBContainsUser } = useFirebaseDetails();
  let userDetails = await checkDBContainsUser(uuid);

  dispatch(
    setMainSubject({
      major: userDetails.exists() && userDetails.val().majorCode,
    })
  );

  if (userDetails.exists() && userDetails.val().favourites) {
    dispatch(setUserWishList([...Object.values(userDetails.val().favourites)]));
  }
};
