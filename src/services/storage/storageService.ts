import { LocalStorageData, SessionStorageData } from "./types";

export class StorageService<
  DataType extends LocalStorageData | SessionStorageData
> {
  constructor(private storage: Storage) {}

  getItem<T extends keyof DataType>(key: T): DataType[T] | null {
    const output = this.storage.getItem(key as string);

    if (output) {
      return JSON.parse(output) as DataType[T];
    }

    return output as null;
  }

  setItem<T extends keyof DataType>(key: keyof DataType, value: DataType[T]) {
    return this.storage.setItem(key as string, JSON.stringify(value));
  }
}
