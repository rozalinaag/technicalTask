import { makeAutoObservable } from "mobx";
import { Diagram, deleteDiagrams } from "..";
import { initialData } from "./initialData";

class DiagramsStore {
  diagrams: Diagram[] = localStorage.diagrams? JSON.parse( localStorage.diagrams ) : initialData;
  
  constructor() {
    localStorage.setItem('diagrams', JSON.stringify(this.diagrams));
    makeAutoObservable(this)
  }

  deleteDiagramsAction = (keys: React.Key[]) => {
    this.diagrams = deleteDiagrams(keys, this.diagrams);
    localStorage.setItem('diagrams', JSON.stringify(this.diagrams));
  }

  pushNewDiagramAction = (newDiagram: Diagram) => {
    const  newData = [...this.diagrams.filter(item => item.key !== newDiagram.key), newDiagram]
    this.diagrams = newData;
    localStorage.setItem('diagrams', JSON.stringify(newData));
  }
}

export default new DiagramsStore();
