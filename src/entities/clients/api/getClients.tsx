import { Client } from '../index';
import { initialDataClients } from './initialDataClients';

export function getClients(): Client[] {
  return initialDataClients;
}
