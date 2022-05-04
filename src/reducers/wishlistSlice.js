import { createSlice } from '@reduxjs/toolkit';


const initialState = [];

export const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
      addClass: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        
        /*
        let exampleClass = {
            semester: null | "semester name ie fall 2022",
            id: "comp-110",
            name: "Introduction to Algorithms and Programming",
            units: 3
        }*/
        const newClassId=action.payload.id;
        if(state.find(e=>e.id===newClassId)){
          return state;
        }
        return [...state,action.payload]
      },
      removeClass: (state,action) => {
          const classId = action.payload.toLowerCase();
          return state.filter(({id})=>id!==classId);
      }
    },
  });

  export const { addClass, removeClass } = wishlistSlice.actions;
  
// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectWishlist = (state) => state.wishlist;

export default wishlistSlice.reducer;
