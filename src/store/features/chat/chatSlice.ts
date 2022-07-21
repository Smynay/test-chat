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
  },
});

export const { receive, init, send } = chatSlice.actions;
export const { reducer: chatReducer } = chatSlice;
