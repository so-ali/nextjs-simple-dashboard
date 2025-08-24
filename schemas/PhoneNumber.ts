import z from "zod";

export const SchemaPhoneNumber = z
  .string()
  .regex(/^09\d{9}$/, "Please enter a valid Iranian phone number")
  .transform((val) => val.replace(/\s/g, ""));
