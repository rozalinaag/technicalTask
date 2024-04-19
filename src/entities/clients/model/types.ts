import { z } from 'zod';

export const zClient = z.object({
  key: z.number(),
  name: z.string().min(1, { message: "Введите имя" }).max(250, { message: "Максимальное количество символов 250" }),
  lastName: z.string().min(1, { message: "Введите фамилию" }).max(250, { message: "Максимальное количество символов 250" }),
  middleName: z.string(),
});

export type Client = z.infer<typeof zClient>;
