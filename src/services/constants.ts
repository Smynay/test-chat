import { SocketService } from "./socket";
import { LocalStorageService, SessionStorageService } from "./storage";
import { AppServices } from "./types";

export const APP_SERVICES: AppServices = {
  SocketService: new SocketService(
    `http://${process.env.REACT_APP_PUBLIC_IP || "localhost"}:5000`
  ),
  LocalStorageService: new LocalStorageService(localStorage),
  SessionStorageService: new SessionStorageService(sessionStorage),
};
