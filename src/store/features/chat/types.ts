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
  activeUsers: ChatUser[];
}

export enum ChatEventTypes {
  SEND_MESSAGE = "message:send",
  RECEIVE_MESSAGE = "message:receive",
  CONNECTED = "chat-user:connected",
  DISCONNECTED = "chat-user:disconnected",
}

export interface ChatUser {
  senderId: ID;
  senderName: string;
  socketId: ID;
}
