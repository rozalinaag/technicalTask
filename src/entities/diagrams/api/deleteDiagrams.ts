import { Client } from "../model/types";

export function deleteDiagrams(keys: React.Key[], clients: Client[]): Client[] {
  return clients.filter(item => !keys.includes(item.key))
}