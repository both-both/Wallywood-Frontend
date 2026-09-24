import { z } from "zod";

// Validering

export const contactSchema = z.object({
  name: z.string().min(2, "Navn skal være mindst 2 tegn"),
  email: z.email("Indtast en gyldig email"),
  message: z
    .string()
    .min(1, "Beskeden skal udfyldes")
    .max(400, "Beskeden må højst være 400 tegn"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
