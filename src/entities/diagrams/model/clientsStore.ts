import { makeAutoObservable } from "mobx";
import { Client, deleteDiagrams } from "..";
import { initialDataClients } from "./initialData";

class ClientsStore {
  clients: Client[] = localStorage.clients? JSON.parse( localStorage.clients ) : initialDataClients;
  
  constructor() {
    localStorage.setItem('clients', JSON.stringify(this.clients));
    makeAutoObservable(this)
  }

  deleteClientsAction = (keys: React.Key[]) => {
    this.clients = deleteDiagrams(keys, this.clients);
    localStorage.setItem('clients', JSON.stringify(this.clients));
  }

  pushNewClientAction = (newClient: Client) => {
    const  newData = [...this.clients.filter(item => item.key !== newClient.key), newClient]
    this.clients = newData;
    localStorage.setItem('clients', JSON.stringify(newData));
  }
}

export default new ClientsStore();
