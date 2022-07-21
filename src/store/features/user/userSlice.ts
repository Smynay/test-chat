import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./constants";
import { USER_SLICE_NAME } from "./constants";

const userSlice = createSlice({
  name: USER_SLICE_NAME,
  initialState,
  reducers: {
    init: () => {},
  },
});

export const { init } = userSlice.actions;
export const { reducer: userReducer } = userSlice;
