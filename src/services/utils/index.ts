import { v4 } from "uuid";

export const getId = (): string => {
  return v4();
};
