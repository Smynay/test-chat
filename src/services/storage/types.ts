export enum LocalStorageKeys {
  USER_ID = "userId",
  CONNECTION_ID = "connectionId",
}

export enum SessionStorageKeys {
  TEMP_KEY = "TEMP_KEY",
}

export interface Storage<Keys extends LocalStorageKeys | SessionStorageKeys> {
  getItem(key: Keys): string | null;
  setItem(key: Keys, value: string): void;
}
