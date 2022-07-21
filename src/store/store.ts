import { configureStore } from "@reduxjs/toolkit";
import { chatReducer, userReducer } from "./features";

export const store = configureStore({
  reducer: {
    chat: chatReducer,
    user: userReducer,
  },
});
