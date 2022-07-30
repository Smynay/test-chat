import { StorageService } from "./storageService";
import { LocalStorageData, SessionStorageData } from "./types";

export const LocalStorageService = StorageService<LocalStorageData>;
export const SessionStorageService = StorageService<SessionStorageData>;
