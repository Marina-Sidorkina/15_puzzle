import { makeAutoObservable } from "mobx";
import {getTime} from "../utils";

class GameState {
  winner = false;
  movesCount = 0;
  secondsPassed = 0;
  minutesPassed = 0;
  hoursPassed = 0;

  constructor() {
    makeAutoObservable(this);
  }

  setWinner() {
    this.winner = true;
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
