import { makeAutoObservable } from "mobx";
import {getTime} from "../utils";

class TimerState {
  secondsPassed = 0;
  minutesPassed = 0;
  hoursPassed = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increaseTimer() {
    const time = getTime(this.secondsPassed, this.minutesPassed, this.hoursPassed);

    this.secondsPassed = time.seconds;
    this.minutesPassed = time.minutes;
    this.hoursPassed = time.hours;
  }
}

export default new TimerState();
