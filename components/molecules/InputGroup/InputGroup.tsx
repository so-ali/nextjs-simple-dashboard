import { IInputGroupProps } from "./InputGroup.types";
import style from "./InputGroup.module.scss";

export default function InputGroup({
  children,
  label,
  error,
}: IInputGroupProps) {
  return (
    <div>
      <label className={style.group}>
        {label && <span className={style.label}>{label}</span>}
        {children}
        <span className={style.error}>{error || ""}</span>
      </label>
    </div>
  );
}
