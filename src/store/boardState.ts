import { makeAutoObservable } from "mobx";
import {shuffleArray} from "../utils";

class BoardState {
  tiles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  emptyIndex = 15;

  constructor() {
    makeAutoObservable(this);
  }

  replaceTiles(tileIndex: number, tileValue: number) {
    this.tiles.splice(this.emptyIndex, 1, tileValue);
    this.tiles.splice(tileIndex, 1, 16);
    this.emptyIndex = tileIndex;
  }

  shuffleTiles() {
    this.tiles = shuffleArray(this.tiles);
    this. emptyIndex = this.tiles.indexOf(16);
  }

  resetTiles() {
    this.tiles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    this.emptyIndex = 15;
  }
}

export default new BoardState();
