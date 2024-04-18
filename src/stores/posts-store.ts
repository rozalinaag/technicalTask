import { makeAutoObservable } from "mobx";
import { getClients } from "../entities/clients/api/getClients";
import { Client } from "../entities/clients";

class ClientsStore {
  posts?: Client[];

  constructor() {
    makeAutoObservable(this)
  }

  getPostsAction = () => {
    this.posts = getClients();
  }
}

export default new ClientsStore();