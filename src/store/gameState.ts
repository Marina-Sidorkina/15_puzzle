import { makeAutoObservable } from "mobx";
import {getTime} from "../utils";

class GameState {
  winner = false;
  movesCount = 0;
  secondsPassed = 0;
  minutesPassed = 0;
  hoursPassed = 0;
  inProcess = false;

  constructor() {
    makeAutoObservable(this);
  }

  setInProcess(value: boolean) {
    this.inProcess = value;
  }

  setWinner() {
    this.winner = true;
  }

  reset() {
    this.winner = false;
    this.movesCount = 0;
    this.secondsPassed = 0;
    this.minutesPassed = 0;
    this.hoursPassed = 0;
    this.inProcess = false;
  }

  increaseCounter() {
    this.movesCount += 1;
  }

  increaseTimer() {
    const time = getTime(this.secondsPassed, this.minutesPassed, this.hoursPassed);

    this.secondsPassed = time.seconds;
    this.minutesPassed = time.minutes;
    this.hoursPassed = time.hours;
  }
}

export default new GameState();
