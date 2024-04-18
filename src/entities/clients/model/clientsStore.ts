import { makeAutoObservable } from "mobx";
import { getClients } from "../api/getClients";
import { Client } from "..";
import { initialDataClients } from "./initialDataClients";

class ClientsStore {
  clients: Client[] =  localStorage.clients? JSON.parse( localStorage.clients ) : initialDataClients;
  
  constructor() {
    localStorage.setItem('clients', JSON.stringify(this.clients));
    makeAutoObservable(this)
  }

  getClientsAction = () => {
    this.clients = getClients();
  }
}

export default new ClientsStore();
