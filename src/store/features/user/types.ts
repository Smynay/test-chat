export type UserState = {
  userData?: User;
  isAuthorized: boolean;
};

export interface User {
  id: string;
  name: string;
}
