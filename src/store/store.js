import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import classesSlice  from '../reducers/classesSlice';
import profileSlice from '../reducers/profileSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    profile: profileSlice,
    classes: classesSlice
  },
});
