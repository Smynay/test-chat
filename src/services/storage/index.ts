import {StorageService} from "./storageService";
import {LocalStorageKeys} from "./types";

export const LocalStorageService = StorageService<LocalStorageKeys>;
export const SessionStorageService = StorageService<LocalStorageKeys>;
