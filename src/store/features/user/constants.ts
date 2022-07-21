import { UserState } from "./types";

export const USER_SLICE_NAME = "userSlice";

export const initialState: UserState = {
  userData: {
    id: "123",
    name: "Nikita",
  },
};
