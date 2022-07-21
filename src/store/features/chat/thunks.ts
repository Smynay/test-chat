import { createAsyncThunk } from "@reduxjs/toolkit";

const ChatThunks = {
  INITIALIZE_CHAT: "chat/initializeChat",
};

export const initializeChat = createAsyncThunk(
  ChatThunks.INITIALIZE_CHAT,
  () => {}
);
