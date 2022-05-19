import { configureStore } from '@reduxjs/toolkit';
import {classesSlice}  from '../reducers/classesSlice';
import {profileSlice} from '../reducers/profileSlice';
import  { wishlistSlice }  from '../reducers/wishlistSlice';

export const store = configureStore({
  reducer: {
    [profileSlice.name]: profileSlice.reducer,
    [classesSlice.name]: classesSlice.reducer,
    [wishlistSlice.name]: wishlistSlice.reducer
  },
});
