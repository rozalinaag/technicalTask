import { z } from 'zod';

export const zClient = z.object({
  key: z.number(),
  name: z.string().min(1, { message: "Имя должно содержать хотя бы 1 символ" }).max(250, { message: "Максимальное количество символов 250" }),
  lastName: z.string().min(1, { message: "Фамилия должна содержать хотя бы 1 символ" }).max(250, { message: "Максимальное количество символов 250" }),
  middleName: z.string(),
  phone: z.string().min(5).max(20),
  email: z.string().email(),
  adress: z.string(),
});

export type Client = z.infer<typeof zClient>;
