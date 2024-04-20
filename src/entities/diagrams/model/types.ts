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
  nodes: z.array(
    z.object({
      id: z.string(),
      position: z.object({
        x: z.number(),
        y: z.number(),
      }),
      type: z.string(),
      data: z.object({
        label: z.string(),
      }),
    })
  ),
  edges: z.array(
    z.object({
      id: z.string(),
      source: z.string(),
      target: z.string(),
    })
  ),
});

export type Diagram = z.infer<typeof zDiagrams>;
