import { initialEdges } from './initialEdges';

export const initialDiagrams = [
  {
    key: '1',
    name: 'Диаграмма потоков данных',
    nodes: [
      {
        id: '1',
        type: 'node-with-toolbar',
        position: { x: 400, y: 100 },
        data: { label: 'Поток 1' },
      },
      {
        id: '2',
        type: 'node-with-toolbar',
        position: { x: 400, y: 200 },
        data: { label: 'Поток 2' },
      },
      {
        id: '3',
        type: 'node-with-toolbar',
        position: { x: 400, y: 300 },
        data: { label: 'Поток 3' },
      },
      {
        id: '4',
        type: 'node-with-toolbar',
        position: { x: 400, y: 400 },
        data: { label: 'Поток 4' },
      },
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2', type: 'straight' },
      { id: 'e2-3', source: '2', target: '3', type: 'straight' },
      { id: 'e3-4', source: '3', target: '4', type: 'straight' },
    ],
  },
  {
    key: '2',
    name: 'Диаграмма классов',
    nodes: [
      {
        id: '1',
        position: { x: 400, y: 100 },
        type: 'node-with-toolbar',
        data: { label: 'Класс 1' },
      },
      {
        id: '2',
        position: { x: 400, y: 200 },
        type: 'node-with-toolbar',
        data: { label: 'Класс 2' },
      },
      {
        id: '3',
        position: { x: 400, y: 300 },
        type: 'node-with-toolbar',
        data: { label: 'Класс 3' },
      },
      {
        id: '4',
        position: { x: 400, y: 400 },
        type: 'node-with-toolbar',
        data: { label: 'Класс 4' },
      },
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2', type: 'straight' },
      { id: 'e2-3', source: '2', target: '3', type: 'straight' },
      { id: 'e3-4', source: '3', target: '4', type: 'straight' },
    ],
  },
  {
    key: '3',
    name: 'Диаграмма клиентов',
    nodes: [
      {
        id: '1',
        position: { x: 400, y: 100 },
        type: 'node-with-toolbar',
        data: { label: 'Клиент 1' },
      },
      {
        id: '2',
        position: { x: 400, y: 200 },
        type: 'node-with-toolbar',
        data: { label: 'Клиент 2' },
      },
      {
        id: '3',
        position: { x: 400, y: 300 },
        type: 'node-with-toolbar',
        data: { label: 'Клиент 3' },
      },
      {
        id: '4',
        position: { x: 400, y: 400 },
        type: 'node-with-toolbar',
        data: { label: 'Клиент 4' },
      },
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2' },
      { id: 'e2-3', source: '2', target: '3'},
      { id: 'e3-4', source: '3', target: '4' },
    ],
  },
];
