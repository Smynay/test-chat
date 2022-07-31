import { Socket } from "socket.io-client";

export interface ISocketService {
  connection: Socket;
}

export enum SocketCoreEventTypes {
  CONNECTED = "core:connected",
  CONNECTED_DATA = "core:connected-data",
  DISCONNECTED = "code:disconnected",
}
