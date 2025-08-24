import clsx from "clsx";
import { IInputProps } from "./Input.types";
import style from "./Input.module.scss";
import { forwardRef, memo, Ref } from "react";

export default memo(
  forwardRef(function Input(
    { error, ...props }: IInputProps,
    ref: Ref<HTMLInputElement>
  ) {
    return (
      <input
        {...props}
        className={clsx(style.input, props.className, {
          [style.error]: error,
        })}
        ref={ref}
      />
    );
  })
);
