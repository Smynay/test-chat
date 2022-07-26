import { SocketService } from "./socket";
import { AppServiceNames } from "./types";
import { LocalStorageService, SessionStorageService } from "./storage";

export const APP_SERVICES: Record<AppServiceNames, any> = {
  SocketService: new SocketService(
    `http://${process.env.REACT_APP_PUBLIC_IP || "localhost"}:5000`
  ),
  LocalStorageService: new LocalStorageService(localStorage),
  SessionStorageService: new SessionStorageService(sessionStorage),
};
