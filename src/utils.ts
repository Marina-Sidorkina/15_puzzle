import {CELL_COORDINATES} from "./constants";

type time = {
  seconds: number;
  minutes: number;
  hours: number;
}

export function getTime(seconds: number, minutes: number, hours: number) : time {
  let scs: number;
  let mns: number;
  let hrs: number;

  scs = (seconds + 1 === 60) ? 0 : seconds + 1;
  mns = (seconds + 1 === 60) ? minutes + 1 : minutes;
  hrs = (mns === 60) ? hours + 1 : hours;
  mns = (mns === 60) ? 0 : mns;

  return {
    seconds: scs,
    minutes: mns,
    hours: hrs
  }
}

export function getFormattedTime(seconds: number, minutes: number, hours: number): string {
  const secondsValue = seconds >= 10 ? seconds : `0${seconds}`;
  const minutesValue = minutes >= 10 ? minutes : `0${minutes}`;
  const hoursValue = hours >= 10 ? hours : `0${hours}`;

  return `${hoursValue}:${minutesValue}:${secondsValue}`
}

export function checkNumbersOrder(numbers: Array<number>): boolean {
  return numbers.every((number, index) => number === (index + 1));
}

export function checkMoveAbility(tileIndex: number, emptyIndex: number) {
  const emptyCellCoords = CELL_COORDINATES[emptyIndex];
  const tileCellCoords = CELL_COORDINATES[tileIndex];

  if(emptyCellCoords.y === tileCellCoords.y
      && Math.abs(emptyCellCoords.x - tileCellCoords.x) === 1) {
    return true;
  }

  return emptyCellCoords.x === tileCellCoords.x &&
      Math.abs(emptyCellCoords.y - tileCellCoords.y) === 1;
}

const generateRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max + 1 - min) + min);
};

export const shuffleArray = (array: Array<number>) => {
  let result = array.slice();

  for(let i = 0; i < array.length; i++) {
    let start = 0;
    let index = generateRandomNumber(start, i);
    let first = result[i];
    let second = result[index];

    result.splice(i, 1, second);
    result.splice(index, 1, first);
  }
  return result;
}
