import { ISocketService } from "./socket";
import { LocalStorageService, SessionStorageService } from "./storage/types";

export interface AppServices {
  [AppServiceNames.SOCKET_SERVICE]: ISocketService;
  [AppServiceNames.LOCAL_STORAGE_SERVICE]: LocalStorageService;
  [AppServiceNames.SESSION_STORAGE_SERVICE]: SessionStorageService;
}

export enum AppServiceNames {
  SOCKET_SERVICE = "SocketService",
  LOCAL_STORAGE_SERVICE = "LocalStorageService",
  SESSION_STORAGE_SERVICE = "SessionStorageService",
}
