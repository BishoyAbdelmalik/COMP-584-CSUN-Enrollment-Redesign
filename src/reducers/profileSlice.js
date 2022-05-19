import { createSlice } from "@reduxjs/toolkit";

const major = localStorage.getItem("userMajor");
const initialState = {
  email: "",
  status: "",
  mainSubject: "",
  userUUID: "",
  errorMessage: "",
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

      state.email = action.payload.email;
      state.mainSubject = action.payload.mainSubject;
      state.status = "logged-in";
      state.userUUID = action.payload.uid;
      state.errorMessage = "";
    },
    logout: (state) => {
      localStorage.clear();
      return initialState;
    },
    error: (state, action) => {
      console.log(action);
      state.errorMessage = action.payload.errorMessage;
    },
    setMainSubject: (state, action) => {
      localStorage.setItem("userMajor", action.payload.major);
      state.mainSubject = action.payload.major;
    },
  },
});

export const { login, logout, error, setMainSubject } = profileSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectMainSubject = (state) => state.profile.mainSubject;
export const selectEmail = (state) => state.profile.email;
export const selectStatus = (state) => state.profile.status;
export const selectUser = (state) => state.profile.userUUID;
export const selectError = (state) => state.profile.errorMessage;

export default profileSlice.reducer;
