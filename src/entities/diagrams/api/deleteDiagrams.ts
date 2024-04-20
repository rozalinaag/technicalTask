import { Diagram } from "../model/types";

export function deleteDiagrams(keys: React.Key[], diagrams: Diagram[]): Diagram[] {
  return diagrams.filter(item => !keys.includes(item.key))
}