import { LocalStorageKeys, SessionStorageKeys, Storage } from "./types";

export class StorageService<
  Keys extends LocalStorageKeys | SessionStorageKeys
> {
  constructor(private storage: Storage<Keys>) {}

  getItem(key: Keys) {
    return this.storage.getItem(key);
  }

  setItem(key: Keys, value: string) {
    return this.storage.setItem(key, value);
  }
}
