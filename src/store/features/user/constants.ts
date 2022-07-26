import { UserState } from "./types";

export const USER_SLICE_NAME = "userSlice";

export const initialState: UserState = {
  userData: undefined,
  isAuthorized: false,
};
