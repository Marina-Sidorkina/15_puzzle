import { makeAutoObservable } from "mobx";

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

  }
}

export default new BoardState();
