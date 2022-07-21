import { io, Socket } from "socket.io-client";
import { ISocketService } from "./types";
import { getId } from "../utils";

export class SocketService implements ISocketService {
  get connection(): Socket {
    return this._connection;
  }

  _connection: Socket;
  _id: string;

  constructor(url: string) {
    this._id = getId();
    this._connection = io(url);
  }
}
