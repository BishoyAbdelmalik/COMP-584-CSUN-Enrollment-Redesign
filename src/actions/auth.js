
import { useUserAuth } from "../context/authProviders";
import { logout, error } from "./../reducers/profileSlice";


export const signout = () => async (dispatch) => {
  const { logOut } = useUserAuth();
  try {
    await logOut();
    dispatch(logout());
  } catch (err) {
    dispatch(error({ errorMessage: err.message }));
  }
};
