import { z } from 'zod';

const errorNames = {
  required_error: 'Обязательно для заполнения',
  invalid_type_error: 'Неправильный тип поля',
};

export const zClient = z.object({
  key: z.number(),
  name: z
    .string(errorNames)
    .min(1, { message: 'Имя должно содержать хотя бы 1 символ' })
    .max(250, { message: 'Максимальное количество символов 250' }),
  lastName: z
    .string(errorNames)
    .min(1, { message: 'Фамилия должна содержать хотя бы 1 символ' })
    .max(250, { message: 'Максимальное количество символов 250' }),
  middleName: z.string(errorNames),
  phone: z.string(errorNames).min(5).max(20),
  email: z
    .string({
      required_error: 'Обязательно для заполнения',
      invalid_type_error: 'Неправильно указана почта',
    })
    .email(),
  adress: z.string() || z.null(),
});

export type Client = z.infer<typeof zClient>;
