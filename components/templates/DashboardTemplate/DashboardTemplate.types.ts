import { IUser } from "@/types/User";

export interface IDashboardTemplateProps {
  children?: React.ReactNode;
  user: IUser;
}
