import { ButtonHTMLAttributes } from "react";

export type IButtonVariants = "normal" | "primary" | "secondary";
export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: IButtonVariants;
  block?: boolean;
  loading?: boolean;
}
