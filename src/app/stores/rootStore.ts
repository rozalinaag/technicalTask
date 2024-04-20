import clientsStore from '../../entities/clients/model/clientsStore'
import diagramsStore from '../../entities/diagrams/model/diagramsStore';

class RootStore {
  clients = clientsStore
  diagrams = diagramsStore
}

export default RootStore;