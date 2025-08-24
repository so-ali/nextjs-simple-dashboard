import clsx from "clsx";
import { IButtonProps } from "./Button.types";
import style from "./Button.module.scss";

export default function Button({
  variant,
  children,
  block,
  loading,
  ...props
}: IButtonProps) {
  return (
    <button
      {...props}
      className={clsx(style.button, props.className, {
        [style["button--" + variant]]: variant !== undefined,
        [style["button--block"]]: block === true,
        [style["button--loading"]]: loading === true,
      })}
      disabled={props.disabled || loading === true}
    >
      {children}
    </button>
  );
}
