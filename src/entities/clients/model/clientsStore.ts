import { makeAutoObservable } from "mobx";
import { Client, deleteClients } from "..";
import { initialDataClients } from "./initialDataClients";

class ClientsStore {
  clients: Client[] = localStorage.clients? JSON.parse( localStorage.clients ) : initialDataClients;
  
  constructor() {
    localStorage.setItem('clients', JSON.stringify(this.clients));
    makeAutoObservable(this)
  }

  deleteClientsAction = (keys: React.Key[]) => {
    this.clients = deleteClients(keys, this.clients);
    localStorage.setItem('clients', JSON.stringify(this.clients));
  }

  pushNewClientAction = (newClient: Client) => {
    const newData = [...this.clients, newClient]
    this.clients = newData;
    localStorage.setItem('clients', JSON.stringify(newData));
  }
}

export default new ClientsStore();
