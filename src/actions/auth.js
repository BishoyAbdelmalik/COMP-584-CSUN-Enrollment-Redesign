import { getMainSubject } from "../api/utils";
import { useUserAuth } from "../context/authProviders";
import { logout, error, login } from "./../reducers/profileSlice";

export const manualSignUp = (email, password) => async (dispatch) => {
  const { signUp } = useUserAuth();

  try {
    let currentUser = await signUp(email, password);

    dispatch(
      login({
        email: currentUser.user.email,
        uid: currentUser.uid,
        status: "logged-in",
        mainSubject: "comp",
      })
    );
    dispatch(error({ errorMessage: "" }));
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
    let currentUser = await logIn(email, password);
    dispatch(
      login({
        email: currentUser.email,
        uid: currentUser.uid,
        status: "logged-in",
        mainSubject: "comp",
      })
    );

    dispatch(error({ errorMessage: "" }));
  } catch (err) {
    dispatch(error({ errorMessage: err.message }));
  }
};

export const googleLoginAction = () => async (dispatch) => {
  const { googleSignIn } = useUserAuth();

  try {
    let currentUser = await googleSignIn();
    dispatch(
      login({
        email: currentUser.email,
        uid: currentUser.uid,
        status: "logged-in",
        mainSubject: "comp",
      })
    );

    dispatch(error({ errorMessage: "" }));
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
