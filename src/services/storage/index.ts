import { StorageService } from "./storageService";
import { LocalStorageKeys, SessionStorageKeys } from "./types";

export const LocalStorageService = StorageService<LocalStorageKeys>;
export const SessionStorageService = StorageService<SessionStorageKeys>;
