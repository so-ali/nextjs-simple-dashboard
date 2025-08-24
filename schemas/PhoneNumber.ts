import z from "zod";

export const SchemaPhoneNumber = z.string().startsWith("09").length(11);
