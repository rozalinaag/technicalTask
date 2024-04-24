import { Edges, Nodes } from "../..";

export type PropsDiagram = {
  nodesDiagram?: Nodes[];
  edgesDiagram?: Edges[];
  setNodesDiagram: (value: Nodes[]) => void;
  setEdgesDiagram: (value: Edges[]) => void;
};