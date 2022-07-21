import { ChatState, ChatStatus, Message } from "./types";

export const CHAT_SLICE_NAME = "chat";

export const fakeMessage: Message = {
  senderName: "Ahrap",
  senderId: "12344",
  text: "LMAO",
  timestamp: "2022-07-02T18:55:12.000Z",
};

export const initialState: ChatState = {
  messages: [fakeMessage, fakeMessage, fakeMessage, fakeMessage],
  status: ChatStatus.INITIALIZING,
};
