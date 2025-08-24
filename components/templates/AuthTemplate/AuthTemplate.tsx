import { IAuthTemplateProps } from "./AuthTemplate.types";
import style from "./AuthTemplate.module.scss";

export default function AuthTemplate({ children, title }: IAuthTemplateProps) {
  return (
    <div className={style.wrapper}>
      <div className={style.card}>
        {title && <h1 className={style.title}>{title}</h1>}
        {children}
      </div>
    </div>
  );
}
