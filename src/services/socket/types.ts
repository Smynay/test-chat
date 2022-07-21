import { Socket } from "socket.io-client";

export interface ISocketService {
  connection: Socket;
}
