import { makeAutoObservable } from 'mobx';

class CounterStore {
  counter = 0;

  get getTotal() {
    return this.counter * 2;
  }

  constructor() {
    makeAutoObservable(this);
  }

  increment = (value: number) => {
    this.counter += value;
  };

  decrement = (value: number) => {
    this.counter -= value;
  };
}

export default new CounterStore();
