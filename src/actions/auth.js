import React, { useState, useContext } from "react";

import { useUserAuth } from "../context/authProviders";
import { logout, error } from "./../reducers/profileSlice";

import * as USER_CONSTANTS from "../constants/userConstants";

export const signout = () => async (dispatch) => {
  const { logOut } = useUserAuth();
  try {
    await logOut();
    dispatch(logout());
  } catch (err) {
    dispatch(error({ errorMessage: err.message }));
  }
};
