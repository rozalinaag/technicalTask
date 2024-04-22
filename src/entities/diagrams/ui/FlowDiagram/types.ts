export type PropsDiagram = {
  nodesDiagram?: {
    id: string;
    position: {
      x: number;
      y: number;
    };
    data: {
      label: string;
      onChangeEdit?: (value: string, id: string) => void;
      onAddNewNode?: (label: string, id: string) => void
    };
  }[];
  edgesDiagram?: {
    id: string;
    source: string;
    target: string;
  }[];
};
