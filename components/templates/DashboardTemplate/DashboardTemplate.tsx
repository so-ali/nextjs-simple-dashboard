import { IDashboardTemplateProps } from "./DashboardTemplate.types";
import style from "./DashboardTemplate.module.scss";

export default function DashboardTemplate({
  children,
  user,
}: IDashboardTemplateProps) {
  return (
    <div className={style.wrapper}>
      <div className={style.card}>
        <h1 className={style.title}>Welcome to your account!</h1>
        <ul className={style.details}>
          <li>
            <b>Name:</b> {user.name}
          </li>
          <li>
            <b>Email:</b> {user.email}
          </li>
        </ul>
        {children}
      </div>
    </div>
  );
}
