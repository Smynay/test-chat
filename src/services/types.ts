import { APP_SERVICES } from "./constants";

export type AppServices = typeof APP_SERVICES;

export enum AppServiceNames {
  SOCKET_SERVICE = "SocketService",
  LOCAL_STORAGE_SERVICE = "LocalStorageService",
  SESSION_STORAGE_SERVICE = "SessionStorageService",
}
