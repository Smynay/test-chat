import { ID } from "../../types";

export enum ChatStatus {
  INITIALIZING = "initializing",
  LOADING = "loading",
  FAILED = "failed",
}

export interface Message {
  text: string;
  timestamp: string;
  senderId: ID;
  senderName: string;
}

export interface ChatState {
  messages: Message[];
  status: ChatStatus;
}

export enum ChatEventTypes {
  SEND_MESSAGE = "message:send",
  RECEIVE_MESSAGE = "message:receive",
}
