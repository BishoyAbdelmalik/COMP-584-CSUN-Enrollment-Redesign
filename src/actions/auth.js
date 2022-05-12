import { getMainSubject } from "../api/utils";
import { useUserAuth } from "../context/authProviders";
import { logout, error, login } from "./../reducers/profileSlice";
import { useFirebaseDetails } from "../context/collectionProviders";
import { setUserWishList } from "./../reducers/wishlistSlice";

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

export const manualLoginAction = (email, password) => async (dispatch) => {
  const { logIn } = useUserAuth();
  console.log(email);
  try {
    let { user: currentUser } = await logIn(email, password);
    let { checkDBContainsUser } = useFirebaseDetails();
    let userDetails = await checkDBContainsUser(currentUser.user.uid);

    console.log(userDetails);
    dispatch(
      login({
        email: currentUser.email,
        uid: currentUser.uid,
        status: "logged-in",
        mainSubject: userDetails.exists() && userDetails.val().majorCode,
      })
    );

    if (userDetails.exists() && userDetails.val().favourites) {
      dispatch(
        setUserWishList([...Object.values(userDetails.val().favourites)])
      );
    }
  } catch (err) {
    dispatch(error({ errorMessage: err.message }));
  }
};

export const googleLoginAction = () => async (dispatch) => {
  const { googleSignIn } = useUserAuth();

  try {
    let { user: currentUser } = await googleSignIn();
    let { checkDBContainsUser } = useFirebaseDetails();

    let userDetails = await checkDBContainsUser(currentUser.uid);

    console.log(userDetails.val(), currentUser);
    dispatch(
      login({
        email: currentUser.email,
        uid: currentUser.uid,
        status: "logged-in",
        mainSubject: userDetails.exists() && userDetails.val().majorCode,
      })
    );

    if (userDetails.exists() && userDetails.val().favourites) {
      dispatch(
        setUserWishList([...Object.values(userDetails.val().favourites)])
      );
    }
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
      mainSubject: getMainSubject(currentUser.uid),
    })
  );
};
