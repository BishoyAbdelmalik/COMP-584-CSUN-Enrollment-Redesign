
import { getMainSubject } from "../api/utils";
import { useUserAuth } from "../context/authProviders";
import { logout, error, login } from "./../reducers/profileSlice";


export const signout = () => async (dispatch) => {
  const { logOut } = useUserAuth();
  try {
    await logOut();
    dispatch(logout());
  } catch (err) {
    dispatch(error({ errorMessage: err.message }));
  }
};

export const signin = (dispatch,currentUser) =>{
  dispatch(
    login({
      email: currentUser.email,
      uid: currentUser.uid,
      status: "logged-in",
      mainSubject: getMainSubject(currentUser.uid),
    })
  );
}
