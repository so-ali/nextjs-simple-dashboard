import clsx from "clsx";
import { IButtonProps } from "./Button.types";
import style from "./Button.module.scss";

export default function Button({ variant, children, ...props }: IButtonProps) {
  return (
    <button
      className={clsx(style.button, style["button--" + variant])}
      {...props}
    >
      {children}
    </button>
  );
}
