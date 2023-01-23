import { makeAutoObservable } from "mobx";

class CounterState {
  movesCount = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increaseCounter() {
    this.movesCount += 1;
  }
}

export default new CounterState();
