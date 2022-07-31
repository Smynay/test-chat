import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState, USER_SLICE_NAME } from "./constants";
import { User } from "./types";

const userSlice = createSlice({
  name: USER_SLICE_NAME,
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<User>) => {
      state.userData = action.payload;
      state.isAuthorized = true;
    },
    resetUserData: (state) => {
      state.userData = undefined;
      state.isAuthorized = false;
    },
  },
});

export const { setUserData, resetUserData } = userSlice.actions;
export const { reducer: userReducer } = userSlice;
