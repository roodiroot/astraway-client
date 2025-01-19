import { z } from "zod";

export const formSchema = z.object({
  phone: z.string().min(17, { message: "Введите корректный телефон." }),
  name: z.string().min(2, { message: "Введите корректное имя." }),
  email: z
    .string()
    .optional()
    .refine((value) => !value || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value), {
      message: "Введите корректную электронную почту.",
    }),
});
