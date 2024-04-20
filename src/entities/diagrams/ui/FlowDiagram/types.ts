export type PropsDiagram = {
  nodesDiagram?: {
    id: string;
    position: {
      x: number;
      y: number;
    };
    data: {
      label: string;
    };
  }[];
  edgesDiagram?: {
    id: string;
    source: string;
    target: string;
  }[];
};
