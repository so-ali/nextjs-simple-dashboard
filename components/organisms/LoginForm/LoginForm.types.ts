import { SchemaLoginForm } from "@/schemas/LoginForm";
import z from "zod";

export type ILoginFormData = z.infer<typeof SchemaLoginForm>;

export interface ILoginFormProps {
  onSubmit: (data: ILoginFormData) => Promise<void>;
}
