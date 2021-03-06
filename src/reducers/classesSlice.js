import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mainSubject: [],
  ge: [],
  addAllMajors: [],
  allCourses: [],
};

export const classesSlice = createSlice({
  name: "classes",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addMainSubjectClass: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.mainSubject = action.payload.mainSubject;
    },
    addGEClass: (state, action) => {
      state.ge = action.payload.ge;
    },
    addAllCourses: (state, action) => {
      state.allCourses = action.payload.allCourses
    },
    reset: () => {
      return initialState;
    },

    addAllMajors: (state, action) => {
      state.addAllMajors = action.payload.allMajors;
    },
  },
});

export const { reset, addMainSubjectClass, addGEClass, addAllMajors, addAllCourses } = classesSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectGE = (state) => state.classes.ge;
export const selectMainSubjectClasses = (state) => state.classes.mainSubject;
export const selectAllMajors = (state) => state.classes.addAllMajors;
export const selectAllCourses = (state) => state.classes.allCourses;


export default classesSlice.reducer;
