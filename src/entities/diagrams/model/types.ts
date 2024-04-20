import { z } from 'zod';

const errorNames = {
  required_error: 'Обязательно для заполнения',
  invalid_type_error: 'Неправильный тип поля',
};

export const zDiagrams = z.object({
  key: z.string(),
  name: z
    .string(errorNames)
    .min(1, { message: 'Имя должно содержать хотя бы 1 символ' })
    .max(250, { message: 'Максимальное количество символов 250' }),
});

export type Diagram = z.infer<typeof zDiagrams>;
