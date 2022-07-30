import { User } from "../../store/features/user/types";
import { ID } from "../../store";
import { StorageService } from "./storageService";

export enum LocalStorageKeys {
  USER_DATA = "userData",
  CONNECTION_ID = "connectionId",
}

export enum SessionStorageKeys {
  TEMP_KEY = "TEMP_KEY",
}

export interface LocalStorageData {
  [LocalStorageKeys.USER_DATA]: User;
  [LocalStorageKeys.CONNECTION_ID]: ID;
}

export interface SessionStorageData {
  [SessionStorageKeys.TEMP_KEY]: string;
}

export type LocalStorageService = StorageService<LocalStorageData>;
export type SessionStorageService = StorageService<SessionStorageData>;
