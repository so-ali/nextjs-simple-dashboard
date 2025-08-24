import z from "zod";
import { SchemaPhoneNumber } from "./PhoneNumber";

export const SchemaLoginForm = z.object({
  phone: SchemaPhoneNumber,
});
