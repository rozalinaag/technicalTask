import { Client } from '../index';
import { initialDataClients } from '../model/initialDataClients';

export function getClients(): Client[] {
  return localStorage.clients
    ? JSON.parse(localStorage.clients)
    : initialDataClients;
}
