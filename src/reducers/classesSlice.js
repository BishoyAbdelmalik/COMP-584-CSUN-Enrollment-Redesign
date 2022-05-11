import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    mainSubject: [],
    ge: [],
    allCourses: [],
  };

export const classesSlice = createSlice({
    name: 'classes',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
      addMainSubjectClass: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.mainSubject = action.payload.mainSubject    
      },
      addGEClass: (state, action)=>{
        state.ge = action.payload.ge
      },
      addAllCourses: (state, action)=>{
        state.allCourses = action.payload.allCourses
      },
      reset:()=>{
        return initialState
      }
    },
    // The `extraReducers` field lets the slice handle actions defined elsewhere,
    // including actions generated by createAsyncThunk or in other slices.
    // extraReducers: (builder) => {
    //   builder
    //     .addCase(incrementAsync.pending, (state) => {
    //       state.status = 'loading';
    //     })
    //     .addCase(incrementAsync.fulfilled, (state, action) => {
    //       state.status = 'idle';
    //       state.value += action.payload;
    //     });
    // },
  });

  export const { reset, addMainSubjectClass,addGEClass,addAllCourses } = classesSlice.actions;
  
  
// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectGE = (state) => state.classes.ge;
export const selectMainSubjectClasses = (state) => state.classes.mainSubject;
export const selectAllCourses = (state) => state.classes.allCourses;

// export const selectEmail = (state) => state.classesSlice.email;
// export const selectStatus = (state) => state.classesSlice.status;

export default classesSlice.reducer;
