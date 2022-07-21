export enum LocalStorageKeys {
  USER_ID = "userId",
  CONNECTION_ID = "connectionId",
}

export enum SessionStorageKeys {}

export interface Storage<Keys extends LocalStorageKeys | SessionStorageKeys> {
  getItem(key: Keys): string | null;
  setItem(key: Keys, value: string): void;
}
