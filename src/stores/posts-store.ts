import { makeAutoObservable } from "mobx";
import { getClients } from "../entities/clients/api/getClients";
import { Client } from "../entities/clients";

class ClientsStore {
  clients?: Client[];

  constructor() {
    makeAutoObservable(this)
  }

  getClientsAction = () => {
    this.clients = getClients();
  }
}

export default new ClientsStore();