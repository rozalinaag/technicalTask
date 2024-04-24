import { z } from 'zod';

const errorNames = {
  required_error: 'Обязательно для заполнения',
  invalid_type_error: 'Неправильный тип поля',
};

export const zNode = z.array(
  z.object({
    id: z.string(),
    position: z.object({
      x: z.number(),
      y: z.number(),
    }),
    type: z.string(),
    data: z.object({
      label: z.string(),
      onChangeEdit: z.function().args(z.string(), z.string()).returns(z.void()),
      onAddNewNode: z.function().args(z.string(), z.string()).returns(z.void()),
      onDeleteNode: z.function().args(z.string()).returns(z.void()),
    }),
  })
)

export const zEdge = z.array(
  z.object({
    id: z.string(),
    source: z.string(),
    target: z.string(),
  })
)

export const zDiagrams = z.object({
  key: z.string(),
  name: z
    .string(errorNames)
    .min(1, { message: 'Имя должно содержать хотя бы 1 символ' })
    .max(250, { message: 'Максимальное количество символов 250' }),
  nodes: zNode,
  edges: zEdge,
});

export type Diagram = {
  key: string,
  name: string,
  nodes: Nodes[]
  edges: Edges[]
}

export type Nodes = {
  id: string;
  position: {
    x: number;
    y: number;
  };
  type?: string;
  data: {
    label: string;
    onChangeEdit?: (value: string, id: string) => void ;
    onAddNewNode?: (label: string, id: string) => void 
    onDeleteNode?: (id: string) => void;
  };
}

export type Edges = {
  id: string;
  source: string;
  target: string;
}


