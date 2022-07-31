import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChatEventTypes, Message } from "./types";
import { CHAT_SLICE_NAME, initialState } from "./constants";
import { APP_SERVICES } from "../../../services";

const chatSlice = createSlice({
  name: CHAT_SLICE_NAME,
  initialState,
  reducers: {
    receive: (state, action: PayloadAction<Message>) => {
      state.messages.push(action.payload);
    },
    init: () => {},
    send: (state, action: PayloadAction<Message>) => {
      APP_SERVICES.SocketService.connection.emit(
        ChatEventTypes.SEND_MESSAGE,
        action.payload
      );
    },
    resetSlice: (state) => {
      state.messages = initialState.messages;
      state.status = initialState.status;
    },
  },
});

export const { receive, init, send, resetSlice } = chatSlice.actions;
export const { reducer: chatReducer } = chatSlice;
