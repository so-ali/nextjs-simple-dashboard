import { IUser } from "@/types/User";

export interface IAuthContext {
  user: IUser | null | undefined;
  setUser: (user: IUser) => void;
  clearUser: () => void;
}
